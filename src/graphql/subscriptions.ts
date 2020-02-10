// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign {
    onCreateCampaign {
      id
      name
      questions {
        items {
          id
          question
        }
        nextToken
      }
    }
  }
`;
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign {
    onUpdateCampaign {
      id
      name
      questions {
        items {
          id
          question
        }
        nextToken
      }
    }
  }
`;
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign {
    onDeleteCampaign {
      id
      name
      questions {
        items {
          id
          question
        }
        nextToken
      }
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      question
      campaign {
        id
        name
        questions {
          nextToken
        }
      }
      answers {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      question
      campaign {
        id
        name
        questions {
          nextToken
        }
      }
      answers {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      question
      campaign {
        id
        name
        questions {
          nextToken
        }
      }
      answers {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
      id
      file {
        bucket
        region
        key
      }
      post {
        id
        question
        campaign {
          id
          name
        }
        answers {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
      id
      file {
        bucket
        region
        key
      }
      post {
        id
        question
        campaign {
          id
          name
        }
        answers {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
      id
      file {
        bucket
        region
        key
      }
      post {
        id
        question
        campaign {
          id
          name
        }
        answers {
          nextToken
        }
      }
    }
  }
`;
