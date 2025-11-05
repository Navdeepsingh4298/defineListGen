const sampleListData = {
    listName: "SampleBrandList",
    styleVars: {
      name: ["category", "country", "timezone"],
      values: [
        [
          "type1",
          "type1",
          "type1",
          "type1",
          "type2",
          "type2",
          "type2",
          "type2",
        ],
        ["US", "US", "US", "US", "UK", "UK", "UK", "UK"],
        ["EST", "EST", "EST", "EST", "GMT", "GMT", "GMT", "GMT"],
      ],
    },groups:{
        groupNames: [{
          groupLabel: "g1",
          groupName: "Group A",
        },{
          groupLabel: "g2",
          groupName: "Group B",
        }],
        groupValues: ['g1','g1','g1','g1','g2','g2','g2','g2'],
    },
    rowLabel: "Br",
    isRowValues: true,
    isCollapseDupes: true,
    listRows: [
      "Brand 1",
      "Brand 2",
      "Brand 3",
      "Brand 4",
      "Brand 5",
      "Brand 6",
      "Brand 7",
      "Brand 8",
    ],
  }

  export default sampleListData;