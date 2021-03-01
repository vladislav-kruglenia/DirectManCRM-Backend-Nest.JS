let Project1 = {
  projectId: '1',
  projectStatus: "InProgress",
  projectName: 'Первый проект',
  deadline: '01.01.2020',
  projectData: {
    projectStages: [
      {
        isActive: false,
        stage: "KeysCollection",
      },
      {
        isActive: true,
        stage: "KeysCollection",
      },
    ],
    dept: {
      isExists: true,
      amountDebt: 4000,
      debtPercentage: 10,
    },
    orderedServices: [
      {
        isReady: true,
        serviceName: 'Услуга1',
      },
      {
        isReady: false,
        serviceName: 'Услуга2',
      },
    ],
    briefId: 'd8247c35-fa50-473b-83de-d57ab95bfaf7',
    comments: [
      {
        authorId: 'e368defb-bb8c-41ee-a1db-1558cde1f7a3',
        authorLogin: 'ema1',
        commentDate: '01.01.2020',
        commentText: 'Первый комментарий',
      },
    ],
  },
};