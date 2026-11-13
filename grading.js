'use strict';
globalThis.QuizGrading = Object.freeze({
  answerSets(question) {
    return question.acceptedAnswers || [question.verified];
  },
  minimumSelections(question) {
    if (question.type !== 'multi') return 1;
    return Math.min(2, ...this.answerSets(question).map(answer => answer.length));
  },
  isCorrect(question, selected = [], matches = []) {
    if (question.type === 'match') {
      const pairs = question.verifiedPairs || question.pairs || [];
      return matches.length === pairs.length && pairs.every((pair, index) => matches[index] === pair.right);
    }
    if (!question.verified.length || new Set(selected).size !== selected.length) return false;
    return this.answerSets(question).some(answer => answer.length === selected.length && answer.every(index => selected.includes(index)));
  },
  displayAnswer(question, response) {
    return response?.correct && this.isCorrect(question, response.selected, response.matches)
      ? response.selected : question.verified;
  }
});
