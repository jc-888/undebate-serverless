/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCampaignInput = {
  id?: string | null;
  name: string;
};

export type ModelCampaignConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelCampaignConditionInput | null> | null;
  or?: Array<ModelCampaignConditionInput | null> | null;
  not?: ModelCampaignConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateCampaignInput = {
  id: string;
  name?: string | null;
};

export type DeleteCampaignInput = {
  id?: string | null;
};

export type CreateQuestionInput = {
  id?: string | null;
  question: string;
  questionCampaignId?: string | null;
};

export type ModelQuestionConditionInput = {
  question?: ModelStringInput | null;
  and?: Array<ModelQuestionConditionInput | null> | null;
  or?: Array<ModelQuestionConditionInput | null> | null;
  not?: ModelQuestionConditionInput | null;
};

export type UpdateQuestionInput = {
  id: string;
  question?: string | null;
  questionCampaignId?: string | null;
};

export type DeleteQuestionInput = {
  id?: string | null;
};

export type CreateAnswerInput = {
  id?: string | null;
  file?: S3ObjectInput | null;
  answerPostId?: string | null;
};

export type S3ObjectInput = {
  bucket: string;
  region: string;
  key: string;
};

export type ModelAnswerConditionInput = {
  and?: Array<ModelAnswerConditionInput | null> | null;
  or?: Array<ModelAnswerConditionInput | null> | null;
  not?: ModelAnswerConditionInput | null;
};

export type UpdateAnswerInput = {
  id: string;
  file?: S3ObjectInput | null;
  answerPostId?: string | null;
};

export type DeleteAnswerInput = {
  id?: string | null;
};

export type ModelCampaignFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCampaignFilterInput | null> | null;
  or?: Array<ModelCampaignFilterInput | null> | null;
  not?: ModelCampaignFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null;
  question?: ModelStringInput | null;
  and?: Array<ModelQuestionFilterInput | null> | null;
  or?: Array<ModelQuestionFilterInput | null> | null;
  not?: ModelQuestionFilterInput | null;
};

export type ModelAnswerFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelAnswerFilterInput | null> | null;
  or?: Array<ModelAnswerFilterInput | null> | null;
  not?: ModelAnswerFilterInput | null;
};

export type CreateCampaignMutationVariables = {
  input: CreateCampaignInput;
  condition?: ModelCampaignConditionInput | null;
};

export type CreateCampaignMutation = {
  createCampaign: {
    __typename: 'Campaign';
    id: string;
    name: string;
    questions: {
      __typename: 'ModelQuestionConnection';
      items: Array<{
        __typename: 'Question';
        id: string;
        question: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateCampaignMutationVariables = {
  input: UpdateCampaignInput;
  condition?: ModelCampaignConditionInput | null;
};

export type UpdateCampaignMutation = {
  updateCampaign: {
    __typename: 'Campaign';
    id: string;
    name: string;
    questions: {
      __typename: 'ModelQuestionConnection';
      items: Array<{
        __typename: 'Question';
        id: string;
        question: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteCampaignMutationVariables = {
  input: DeleteCampaignInput;
  condition?: ModelCampaignConditionInput | null;
};

export type DeleteCampaignMutation = {
  deleteCampaign: {
    __typename: 'Campaign';
    id: string;
    name: string;
    questions: {
      __typename: 'ModelQuestionConnection';
      items: Array<{
        __typename: 'Question';
        id: string;
        question: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateQuestionMutationVariables = {
  input: CreateQuestionInput;
  condition?: ModelQuestionConditionInput | null;
};

export type CreateQuestionMutation = {
  createQuestion: {
    __typename: 'Question';
    id: string;
    question: string;
    campaign: {
      __typename: 'Campaign';
      id: string;
      name: string;
      questions: {
        __typename: 'ModelQuestionConnection';
        nextToken: string | null;
      } | null;
    } | null;
    answers: {
      __typename: 'ModelAnswerConnection';
      items: Array<{
        __typename: 'Answer';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateQuestionMutationVariables = {
  input: UpdateQuestionInput;
  condition?: ModelQuestionConditionInput | null;
};

export type UpdateQuestionMutation = {
  updateQuestion: {
    __typename: 'Question';
    id: string;
    question: string;
    campaign: {
      __typename: 'Campaign';
      id: string;
      name: string;
      questions: {
        __typename: 'ModelQuestionConnection';
        nextToken: string | null;
      } | null;
    } | null;
    answers: {
      __typename: 'ModelAnswerConnection';
      items: Array<{
        __typename: 'Answer';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteQuestionMutationVariables = {
  input: DeleteQuestionInput;
  condition?: ModelQuestionConditionInput | null;
};

export type DeleteQuestionMutation = {
  deleteQuestion: {
    __typename: 'Question';
    id: string;
    question: string;
    campaign: {
      __typename: 'Campaign';
      id: string;
      name: string;
      questions: {
        __typename: 'ModelQuestionConnection';
        nextToken: string | null;
      } | null;
    } | null;
    answers: {
      __typename: 'ModelAnswerConnection';
      items: Array<{
        __typename: 'Answer';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateAnswerMutationVariables = {
  input: CreateAnswerInput;
  condition?: ModelAnswerConditionInput | null;
};

export type CreateAnswerMutation = {
  createAnswer: {
    __typename: 'Answer';
    id: string;
    file: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    post: {
      __typename: 'Question';
      id: string;
      question: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        name: string;
      } | null;
      answers: {
        __typename: 'ModelAnswerConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
};

export type UpdateAnswerMutationVariables = {
  input: UpdateAnswerInput;
  condition?: ModelAnswerConditionInput | null;
};

export type UpdateAnswerMutation = {
  updateAnswer: {
    __typename: 'Answer';
    id: string;
    file: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    post: {
      __typename: 'Question';
      id: string;
      question: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        name: string;
      } | null;
      answers: {
        __typename: 'ModelAnswerConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
};

export type DeleteAnswerMutationVariables = {
  input: DeleteAnswerInput;
  condition?: ModelAnswerConditionInput | null;
};

export type DeleteAnswerMutation = {
  deleteAnswer: {
    __typename: 'Answer';
    id: string;
    file: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    post: {
      __typename: 'Question';
      id: string;
      question: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        name: string;
      } | null;
      answers: {
        __typename: 'ModelAnswerConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
};

export type GetCampaignQueryVariables = {
  id: string;
};

export type GetCampaignQuery = {
  getCampaign: {
    __typename: 'Campaign';
    id: string;
    name: string;
    questions: {
      __typename: 'ModelQuestionConnection';
      items: Array<{
        __typename: 'Question';
        id: string;
        question: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListCampaignsQueryVariables = {
  filter?: ModelCampaignFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCampaignsQuery = {
  listCampaigns: {
    __typename: 'ModelCampaignConnection';
    items: Array<{
      __typename: 'Campaign';
      id: string;
      name: string;
      questions: {
        __typename: 'ModelQuestionConnection';
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetQuestionQueryVariables = {
  id: string;
};

export type GetQuestionQuery = {
  getQuestion: {
    __typename: 'Question';
    id: string;
    question: string;
    campaign: {
      __typename: 'Campaign';
      id: string;
      name: string;
      questions: {
        __typename: 'ModelQuestionConnection';
        nextToken: string | null;
      } | null;
    } | null;
    answers: {
      __typename: 'ModelAnswerConnection';
      items: Array<{
        __typename: 'Answer';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListQuestionsQuery = {
  listQuestions: {
    __typename: 'ModelQuestionConnection';
    items: Array<{
      __typename: 'Question';
      id: string;
      question: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        name: string;
      } | null;
      answers: {
        __typename: 'ModelAnswerConnection';
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetAnswerQueryVariables = {
  id: string;
};

export type GetAnswerQuery = {
  getAnswer: {
    __typename: 'Answer';
    id: string;
    file: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    post: {
      __typename: 'Question';
      id: string;
      question: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        name: string;
      } | null;
      answers: {
        __typename: 'ModelAnswerConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
};

export type ListAnswersQueryVariables = {
  filter?: ModelAnswerFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListAnswersQuery = {
  listAnswers: {
    __typename: 'ModelAnswerConnection';
    items: Array<{
      __typename: 'Answer';
      id: string;
      file: {
        __typename: 'S3Object';
        bucket: string;
        region: string;
        key: string;
      } | null;
      post: {
        __typename: 'Question';
        id: string;
        question: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateCampaignSubscription = {
  onCreateCampaign: {
    __typename: 'Campaign';
    id: string;
    name: string;
    questions: {
      __typename: 'ModelQuestionConnection';
      items: Array<{
        __typename: 'Question';
        id: string;
        question: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateCampaignSubscription = {
  onUpdateCampaign: {
    __typename: 'Campaign';
    id: string;
    name: string;
    questions: {
      __typename: 'ModelQuestionConnection';
      items: Array<{
        __typename: 'Question';
        id: string;
        question: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteCampaignSubscription = {
  onDeleteCampaign: {
    __typename: 'Campaign';
    id: string;
    name: string;
    questions: {
      __typename: 'ModelQuestionConnection';
      items: Array<{
        __typename: 'Question';
        id: string;
        question: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion: {
    __typename: 'Question';
    id: string;
    question: string;
    campaign: {
      __typename: 'Campaign';
      id: string;
      name: string;
      questions: {
        __typename: 'ModelQuestionConnection';
        nextToken: string | null;
      } | null;
    } | null;
    answers: {
      __typename: 'ModelAnswerConnection';
      items: Array<{
        __typename: 'Answer';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion: {
    __typename: 'Question';
    id: string;
    question: string;
    campaign: {
      __typename: 'Campaign';
      id: string;
      name: string;
      questions: {
        __typename: 'ModelQuestionConnection';
        nextToken: string | null;
      } | null;
    } | null;
    answers: {
      __typename: 'ModelAnswerConnection';
      items: Array<{
        __typename: 'Answer';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion: {
    __typename: 'Question';
    id: string;
    question: string;
    campaign: {
      __typename: 'Campaign';
      id: string;
      name: string;
      questions: {
        __typename: 'ModelQuestionConnection';
        nextToken: string | null;
      } | null;
    } | null;
    answers: {
      __typename: 'ModelAnswerConnection';
      items: Array<{
        __typename: 'Answer';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateAnswerSubscription = {
  onCreateAnswer: {
    __typename: 'Answer';
    id: string;
    file: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    post: {
      __typename: 'Question';
      id: string;
      question: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        name: string;
      } | null;
      answers: {
        __typename: 'ModelAnswerConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
};

export type OnUpdateAnswerSubscription = {
  onUpdateAnswer: {
    __typename: 'Answer';
    id: string;
    file: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    post: {
      __typename: 'Question';
      id: string;
      question: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        name: string;
      } | null;
      answers: {
        __typename: 'ModelAnswerConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
};

export type OnDeleteAnswerSubscription = {
  onDeleteAnswer: {
    __typename: 'Answer';
    id: string;
    file: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    post: {
      __typename: 'Question';
      id: string;
      question: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        name: string;
      } | null;
      answers: {
        __typename: 'ModelAnswerConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
};
