import { Question, QuestionModel, questionType } from '@fucking-exam/shared';

// @deprecated No longer in use
export const showSubjectAndAnswer = (question: Question | QuestionModel) => {
  const answerTemplate = '$ANSWER';

  switch (question.type) {
    case questionType.SINGLE_CHOICE:
      return question.subject.replace(answerTemplate, question.answers.join(''));
    case questionType.multipleChoice:
      return question.subject.replace(answerTemplate, question.answers.join(''));
    default:
      return question.subject;
  }
};
