import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const context = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(new URL('./questions.js', import.meta.url), 'utf8'), context);
vm.runInContext(fs.readFileSync(new URL('./grading.js', import.meta.url), 'utf8'), context);
const questions = context.window.QUESTIONS;
const grading = context.QuizGrading;
assert.equal(questions.length, 119);
assert.deepEqual(Array.from(questions, q => q.id), Array.from({ length: 119 }, (_, i) => i + 1));
let cases = 0;
for (const q of questions) {
  assert.ok(q.question && q.explanation && q.sources.length && q.audit, `Missing audit/content: ${q.id}`);
  for (const source of q.sources) assert.match(source.url, /^https:\/\//);
  if (q.type === 'match') {
    const pairs = q.verifiedPairs || q.pairs;
    assert.ok(pairs.length >= 2 && pairs.every(p => p.left && p.right));
    assert.equal(grading.isCorrect(q, [], pairs.map(p => p.right)), true, `Matching: ${q.id}`);
    assert.equal(grading.isCorrect(q, [], []), false);
    cases += 2;
    continue;
  }
  assert.equal(q.options.length, 4);
  if (q.type === 'single') assert.ok(q.verified.length <= 1);
  if (q.type === 'multi') assert.ok(q.verified.length >= 2, `Too few verified options: ${q.id}`);
  for (const answer of grading.answerSets(q)) {
    if (q.type === 'multi') assert.ok(answer.length >= 2, `Too few accepted options: ${q.id}`);
    assert.equal(new Set(answer).size, answer.length);
    assert.ok(answer.every(i => Number.isInteger(i) && i >= 0 && i < q.options.length));
  }
  // Exhaust all 16 subsets: no accidental partial or extra-option credit.
  for (let mask = 0; mask < 16; mask++) {
    const chosen = [0, 1, 2, 3].filter(i => mask & (1 << i));
    const allowed = q.verified.length > 0 && grading.answerSets(q).some(a => a.length === chosen.length && a.every(i => chosen.includes(i)));
    assert.equal(grading.isCorrect(q, chosen), allowed, `Question ${q.id}, mask ${mask}`);
    cases++;
  }
}
const check = (id, selected, expected) => {
  assert.equal(grading.isCorrect(questions[id - 1], selected), expected, `Regression Q${id}`);
  cases++;
};
check(30, [0, 1, 2, 3], true);
check(30, [0, 1, 3], false);
check(64, [1, 2, 3], true);
check(64, [2, 3], false);
check(16, [0, 1], true);
check(16, [0, 1, 3], true);
check(67, [2], false);
check(67, [1, 2], true);
check(84, [1, 3], true);
check(84, [1, 2, 3], true);
check(90, [2], false);
check(90, [0, 2], true);
check(111, [0, 1, 3], true);
check(111, [0, 1, 2, 3], true);
check(114, [0, 3], true);
check(114, [0, 1, 3], false);
check(75, [2], false);
check(29, [0, 1], false);
check(29, [0, 2], true);
console.log(`119 audited questions; ${cases} grading checks passed.`);
