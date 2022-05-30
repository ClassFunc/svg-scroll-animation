import React from "react";

export const data = [
  //screen1
  {
    type: "iframe",
    display: [0, 20],
    render: () => {
      return <div>
        <div className={"IFrame"}>
          <iframe
            src="https://player.vimeo.com/video/422883518?h=aee925f4ae&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
            title="Geniam Campaign"></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>;
    },
    position: {
      x: 0,
      y: 0
    },
    width: "100%",
    height: "100%"
  },
  // {
  //   type: "image",
  //   display: [0, 20],
  //   actions: [
  //     {
  //       type: "scale",
  //       range: [2, 8],
  //       options: {
  //         start: 1,
  //         end: 1.3
  //       }
  //     },
  //     {
  //       type: "translate",
  //       range: [2, 8],
  //       options: {
  //         x: -100,
  //         y: -250
  //       }
  //     },
  //     {
  //       type: "opacity",
  //       range: [8, 10],
  //       options: {
  //         start: 1,
  //         end: 1
  //       }
  //     }
  //   ],
  //   src: "/images/InnerverseJourney/ThreePeople2/King.webp",
  //   position: {
  //     x: 200,
  //     y: 318
  //   },
  //   width: 400
  // },
  // {
  //   type: "image",
  //   display: [0, 20],
  //   actions: [
  //     {
  //       type: "translate",
  //       range: [2, 6],
  //       options: {
  //         x: 1300,
  //         y: 0
  //       }
  //     },
  //     {
  //       type: "opacity",
  //       range: [2, 6],
  //       options: {
  //         start: 1,
  //         end: 0
  //       }
  //     }
  //   ],
  //   src: "/images/InnerverseJourney/ThreePeople2/FlowerMan.webp",
  //   position: {
  //     x: 760,
  //     y: 318
  //   },
  //   width: 400
  // },
  // {
  //   type: "image",
  //   display: [0, 10],
  //   actions: [
  //     {
  //       type: "translate",
  //       range: [2, 6],
  //       options: {
  //         x: 1300,
  //         y: 0
  //       }
  //     },
  //     {
  //       type: "opacity",
  //       range: [2, 6],
  //       options: {
  //         start: 1,
  //         end: 0
  //       }
  //     }
  //   ],
  //   src: "/images/InnerverseJourney/ThreePeople2/SuperMan.webp",
  //   position: {
  //     x: 1300,
  //     y: 410
  //   },
  //   width: 400
  // },
  // {
  //   type: "textCenter",
  //   position: {
  //     x: 960,
  //     y: 200
  //   },
  //   display: [0, 6],
  //   fontSize: 50,
  //   fontWeight: "bold",
  //   lines: ["3人の旅人"],
  //   color: "white",
  //   actions: [{
  //     type: "opacity",
  //     range: [2, 6],
  //     options: {
  //       start: 1,
  //       end: 0
  //     }
  //   }]
  // },
  // //screen2
  // {
  //   type: "text",
  //   position: {
  //     x: 980,
  //     y: -100
  //   },
  //   display: [10, 20],
  //   fontSize: 50,
  //   fontWeight: "bold",
  //   lines: ["1人目の旅人"],
  //   color: "white",
  //   actions: [
  //     {
  //       type: "opacity",
  //       range: [10, 17],
  //       options: {
  //         start: 0,
  //         end: 1
  //       }
  //     },
  //     {
  //       type: "translate",
  //       range: [10, 17],
  //       options: {
  //         x: 0,
  //         y: 300
  //       }
  //     }
  //   ]
  // },
  // {
  //   type: "text",
  //   position: {
  //     x: 1480,
  //     y: 280
  //   },
  //   display: [10, 20],
  //   fontSize: 30,
  //   fontWeight: "bold",
  //   lines: ["1人目の旅人は、目に見えるものが大好き。", "そして、目に見えないものは信じない。", "だからこそ、それなりに現実を作れてきた。", "しかし、内なる世界が未開拓で、ふと人生を俯瞰してみると", "「本当はなにしたいのか？」が分からない。"],
  //   color: "white",
  //   actions: [{
  //     type: "opacity",
  //     range: [10, 17],
  //     options: {
  //       start: 0,
  //       end: 1
  //     }
  //   },
  //     {
  //       type: "translate",
  //       range: [10, 17],
  //       options: {
  //         x: -500,
  //         y: 0
  //       }
  //     }
  //   ]
  // },
  // {
  //   type: "image",
  //   display: [10, 20],
  //   actions: [
  //     {
  //       type: "opacity",
  //       range: [10, 17],
  //       options: {
  //         start: 0,
  //         end: 1
  //       }
  //     },
  //     {
  //       type: "translate",
  //       range: [10, 17],
  //       options: {
  //         x: -700,
  //         y: 0
  //       }
  //     }
  //   ],
  //   src: "/images/InnerverseJourney/ThreePeople2/Asset Earth.webp",
  //   position: {
  //     x: 1900,
  //     y: 550
  //   },
  //   width: 400
  // },
  {
    type: "image",
    display: [20, 30],
    actions: [
      {
        type: "translate",
        range: [20, 26],
        options: {
          x: -700,
          y: 0
        }
      },
      {
        type: "opacity",
        range: [20, 26],
        options: {
          start: 0,
          end: 1
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/FlowerMan.webp",
    position: {
      x: 1920,
      y: 150
    },
    width: 500
  },
  {
    type: "image",
    display: [20, 30],
    actions: [
      {
        type: "translate",
        range: [20, 26],
        options: {
          x: 650,
          y: 0
        }
      },
      {
        type: "opacity",
        range: [20, 26],
        options: {
          start: 0,
          end: 1
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/Asset 94.webp",
    position: {
      x: -400,
      y: 600
    },
    width: 400
  },
  {
    type: "text",
    position: {
      x: 500,
      y: -300
    },
    display: [20, 30],
    fontSize: 50,
    fontWeight: "bold",
    lines: ["2人目の旅人"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [20, 26],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [20, 26],
        options: {
          x: 0,
          y: 500
        }
      }
    ]
  },
  {
    type: "textEnd",
    position: {
      x: 850,
      y: 280
    },
    display: [20, 30],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["２人目の旅人は、目に見えないものを大切にする", "そして、目に見えるものには囚われない。", "だからこそ、人生で本当に大事なことを知っている。", "しかし、現実世界が未開拓で、ふと人生を俯瞰してみると", "「思い描いてきたこと」はあまり実現されていない。"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [20, 26],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "fadeIn",
        distance: 6,
        lane: -0.6
      }
    ]
  },
  /// screen3
  {
    type: "text",
    position: {
      x: 490,
      y: -350
    },
    display: [30, 40],
    fontSize: 50,
    fontWeight: "bold",
    lines: ["3人目の旅人"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [30, 36],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [30, 36],
        options: {
          x: 0,
          y: 500
        }
      }
    ]
  },
  {
    type: "image",
    display: [30, 40],
    actions: [
      {
        type: "translate",
        range: [30, 36],
        options: {
          x: 700,
          y: 0
        }
      },
      {
        type: "opacity",
        range: [30, 36],
        options: {
          start: 0,
          end: 1
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/Asset 94.webp",
    position: {
      x: -470,
      y: 470
    },
    width: 500
  },
  {
    type: "image",
    display: [30, 40],
    actions: [
      {
        type: "translate",
        range: [30, 36],
        options: {
          x: 1300,
          y: 600
        }
      },
      {
        type: "opacity",
        range: [30, 36],
        options: {
          start: 0,
          end: 1
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/SuperMan.webp",
    position: {
      x: -623,
      y: -550
    },
    width: 650
  },
  {
    type: "textEnd",
    position: {
      x: 820,
      y: 280
    },
    display: [30, 40],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["３人目の旅人は、目に見えるものを楽しみ、", "目に見えないものも大切にする。", "そして、内なる世界を開拓し、", "情熱の源泉からエネルギーが溢れている。"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [30, 36],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "fadeIn",
        distance: 6,
        lane: -0.6
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 1250,
      y: -20
    },
    display: [30, 40],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["そして、現実世界を開拓し、", "才能の原石を磨き上げ、力を発揮できている。", "だから、内なる世界と現実世界を", "自由自在に旅できる。"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [30, 36],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [30, 36],
        options: {
          x: 0,
          y: 300
        }
      }
    ]
  },
  {
    type: "image",
    display: [30, 40],
    actions: [
      {
        type: "translate",
        range: [30, 36],
        options: {
          x: -653,
          y: 0
        }
      },
      {
        type: "opacity",
        range: [30, 36],
        options: {
          start: 0,
          end: 1
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/Asset Earth.webp",
    position: {
      x: 1900,
      y: 500
    },
    width: 470
  },
  //screen4

  {
    type: "textCenter",
    position: {
      x: 960,
      y: 360
    },
    display: [40, 50],
    fontSize: 80,
    fontWeight: "bold",
    lines: ["内なる世界と現実世界の旅路"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [40, 46],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [40, 46],
        options: {
          x: 0,
          y: -200
        }
      }
    ]
  },
  {
    type: "image",
    display: [40, 50],
    actions: [
      {
        type: "translate",
        range: [40, 46],
        options: {
          x: 800,
          y: 0
        }
      },
      {
        type: "opacity",
        range: [40, 46],
        options: {
          start: 0,
          end: 1
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/2anhDe.webp",
    position: {
      x: -500,
      y: 200
    },
    width: 550
  },
  {
    type: "image",
    display: [40, 50],
    actions: [
      {
        type: "translate",
        range: [40, 46],
        options: {
          x: -700,
          y: 0
        }
      },
      {
        type: "opacity",
        range: [40, 46],
        options: {
          start: 0,
          end: 1
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/Asset Earth.webp",
    position: {
      x: 1780,
      y: 200
    },
    width: 550
  },
  {
    type: "text",
    position: {
      x: 400,
      y: 700
    },
    display: [40, 50],
    fontSize: 20,
    fontWeight: "bold",
    lines: ["インナーバース"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [40, 46],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [40, 46],
        options: {
          x: 0,
          y: 100
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 300,
      y: 750
    },
    display: [40, 50],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["１，「内なる世界」を開拓する。"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [40, 46],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [40, 46],
        options: {
          x: 0,
          y: 100
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 400,
      y: 800
    },
    display: [40, 50],
    fontSize: 20,
    fontWeight: "bold",
    lines: ["インナーリソース"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [40, 46],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [40, 46],
        options: {
          x: 0,
          y: 100
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 300,
      y: 850
    },
    display: [40, 50],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["２，「内的資源」を開発する。"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [40, 46],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [40, 46],
        options: {
          x: 0,
          y: 100
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 400,
      y: 900
    },
    display: [40, 50],
    fontSize: 20,
    fontWeight: "bold",
    lines: ["自己アイデンティティ  リデザイン "],
    color: "white",
    actions: [{
      type: "opacity",
      range: [40, 46],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [40, 46],
        options: {
          x: 0,
          y: 100
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 300,
      y: 950
    },
    display: [40, 50],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["３，「自己概念」を再構築する。"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [40, 46],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [40, 46],
        options: {
          x: 0,
          y: 100
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 1300,
      y: 700
    },
    display: [40, 50],
    fontSize: 20,
    fontWeight: "bold",
    lines: ["リアルバース"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [40, 46],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [40, 46],
        options: {
          x: 0,
          y: 100
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 1200,
      y: 750
    },
    display: [40, 50],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["１，「現実世界」を開拓する。"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [40, 46],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [40, 46],
        options: {
          x: 0,
          y: 100
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 1300,
      y: 800
    },
    display: [40, 50],
    fontSize: 20,
    fontWeight: "bold",
    lines: ["リアルリソース"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [40, 46],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [40, 46],
        options: {
          x: 0,
          y: 100
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 1200,
      y: 850
    },
    display: [40, 50],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["２，「現実資源」を開発する。"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [40, 46],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [40, 46],
        options: {
          x: 0,
          y: 100
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 1300,
      y: 900
    },
    display: [40, 50],
    fontSize: 20,
    fontWeight: "bold",
    lines: ["社会アイデンティティ  リデザイン "],
    color: "white",
    actions: [{
      type: "opacity",
      range: [40, 46],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [40, 46],
        options: {
          x: 0,
          y: 100
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 1200,
      y: 950
    },
    display: [40, 50],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["３，「社会的自己」を再構築する。"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [40, 46],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [40, 46],
        options: {
          x: 0,
          y: 100
        }
      }
    ]
  },
  //screen5

  {
    type: "text",
    position: {
      x: 600,
      y: 150
    },
    display: [50, 60],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["インナーバース"],
    color: "white"
    // actions: [{
    //     type: "opacity",
    //     range: [54, 58],
    //     options: {
    //         start: 0,
    //         end: 1
    //     }
    // }]
  },
  {
    type: "textCenter",
    position: {
      x: 960,
      y: 200
    },
    display: [50, 60],
    fontWeight: "bold",
    fontSize: 80,
    lines: ["内なる世界は未開拓すぎる。"],
    color: "white"
    // actions: [
    //     {
    //         type: "opacity",
    //         range: [52, 55],
    //         options: {
    //             start: 0,
    //             end: 1
    //         }
    //     },
    // {
    //     type: "translate",
    //     range: [52, 55],
    //     options: {
    //         x: -340,
    //         y: 0
    //     }
    // },
    // ]
  },
  {
    type: "textCenter",
    position: {
      x: 960,
      y: 280
    },
    display: [50, 60],
    fontSize: 40,
    fontWeight: "bold",
    lines: ["内的世界の新天地で自己を進化させ、"],
    color: "white"
    // actions: [{
    //     type: "opacity",
    //     range: [55, 58],
    //     options: {
    //         start: 0,
    //         end: 1
    //     }
    // },
    // {
    //     type: "translate",
    //     range: [52, 55],
    //     options: {
    //         x: 340,
    //         y: 0
    //     }
    // },
    // ]
  },
  {
    type: "textCenter",
    position: {
      x: 960,
      y: 330
    },
    display: [50, 60],
    fontSize: 40,
    fontWeight: "bold",
    lines: ["現実世界で、真骨頂を発揮しよう。"],
    color: "white"
    // actions: [{
    //     type: "opacity",
    //     range: [57, 58],
    //     options: {
    //         start: 0,
    //         end: 1
    //     }
    // },
    // {
    //     type: "translate",
    //     range: [52, 55],
    //     options: {
    //         x: -340,
    //         y: 0
    //     }
    // },
    // ]
  },
  {
    type: "image",
    display: [50, 60],
    actions: [
      {
        type: "opacity",
        range: [50, 56],
        options: {
          start: 0,
          end: 1
        }
      },
      // {
      //     type: "scale",
      //     range: [50, 56],
      //     options: {
      //         start: 0.3,
      //         end: 1
      //     }
      // },
      {
        type: "translate",
        range: [50, 58],
        options: {
          x: -350,
          y: 0
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/Asset 41.webp",
    position: {
      x: 700,
      y: 350
    },
    width: 500
  },
  {
    type: "textCenter",
    position: {
      x: 960,
      y: 600
    },
    display: [54, 60],
    fontSize: 30,
    lines: ["Inside Out"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [54, 57],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "image",
    display: [50, 60],
    actions: [
      {
        type: "opacity",
        range: [50, 56],
        options: {
          start: 0,
          end: 1
        }
      },
      // {
      //     type: "scale",
      //     range: [50, 56],
      //     options: {
      //         start: 0.3,
      //         end: 1
      //     }
      // },
      {
        type: "translate",
        range: [50, 58],
        options: {
          x: 270,
          y: 0
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/socialEarth.webp",
    position: {
      x: 800,
      y: 350
    },
    width: 500
  },

  {
    type: "text",
    position: {
      x: 520,
      y: 950
    },
    display: [50, 60],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["Where(in)"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [51, 53],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "text",
    position: {
      x: 730,
      y: 950
    },
    display: [52, 60],
    fontSize: 30,
    lines: ["Who"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [52, 54],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "text",
    position: {
      x: 930,
      y: 950
    },
    display: [54, 60],
    fontSize: 30,
    lines: ["Why"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [54, 56],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "text",
    position: {
      x: 1060,
      y: 950
    },
    display: [56, 60],
    fontSize: 30,
    lines: ["How"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [56, 57.5],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "text",
    position: {
      x: 1190,
      y: 950
    },
    display: [57.5, 60],
    fontSize: 30,
    lines: ["What"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [57.5, 58.5],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "text",
    position: {
      x: 1290,
      y: 950
    },
    display: [58.5, 60],
    fontSize: 30,
    lines: ["Where(out)"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [58.5, 59.5],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "textCenter",
    position: {
      x: 960,
      y: 1000
    },
    display: [50, 60],
    fontSize: 40,
    fontWeight: "bold",
    lines: ["世界観 ＞ 自己概念 ＞ 信念 ＞ 能力 ＞ 行動 ＞ 環境"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [50, 56],
      options: {
        start: 0,
        end: 1
      }
    }
      // {
      //     type: "translate",
      //     range: [50, 58],
      //     options: {
      //         x: 600,
      //         y: 300
      //     }
      // },
    ]
  },


  /////nextPage

  {
    type: "textCenter",
    position: {
      x: 960,
      y: -50
    },
    display: [67.5, 73],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["Inner Resource Development"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [67.5, 69],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [67.5, 69],
        options: {
          x: 0,
          y: 150
        }
      }]
  },
  {
    type: "textCenter",
    position: {
      x: 960,
      y: 20
    },
    display: [65, 73],
    fontSize: 80,
    fontWeight: "bold",
    lines: ["内なる埋蔵資源を開発せよ。"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [65, 67.5],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [65, 67.5],
        options: {
          x: 0,
          y: 170
        }
      }]
  },
  {
    type: "textCenter",
    position: {
      x: 960,
      y: 100
    },
    display: [62.5, 73],
    fontSize: 40,
    fontWeight: "bold",
    lines: ["内在する「人生経験資源」の中に、"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [62.5, 65],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [62.5, 65],
        options: {
          x: 0,
          y: 200
        }
      }
    ]
  },
  {
    type: "textCenter",
    position: {
      x: 960,
      y: 150
    },
    display: [60, 73],
    fontSize: 40,
    fontWeight: "bold",
    lines: ["「情熱の原油」と「才能の原石」が眠っている。"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 62.5],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [60, 62.5],
        options: {
          x: 0,
          y: 200
        }
      }
    ]
  },
  {
    type: "image",
    display: [60, 73],
    actions: [
      {
        type: "opacity",
        range: [60, 66],
        options: {
          start: 0,
          end: 1
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/Asset 40.webp",
    position: {
      x: 710,
      y: 450
    },
    width: 500
  },
  {
    type: "image",
    display: [60, 73],
    actions: [
      {
        type: "opacity",
        range: [60, 66],
        options: {
          start: 0,
          end: 1
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/Asset Earth.webp",
    position: {
      x: 1500,
      y: 450
    },
    width: 250
  },

  {
    type: "text",
    position: {
      x: 780,
      y: 420
    },
    display: [60, 73],
    fontSize: 20,
    fontWeight: "bold",
    lines: ["Oil"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 66],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "text",
    position: {
      x: 1135,
      y: 420
    },
    display: [60, 73],
    fontSize: 20,
    lines: ["Ium"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 66],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "text",
    position: {
      x: -600,
      y: 470
    },
    display: [60, 73],
    fontSize: 30,
    lines: ["エネルギーの原油"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 69],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [60, 69],
        options: {
          x: 1180,
          y: 0
        }
      }]
  },
  {
    type: "text",
    position: {
      x: 2250,
      y: 470
    },
    display: [60, 73],
    fontSize: 30,
    lines: ["アビリティの原石"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 69],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [60, 69],
        options: {
          x: -1140,
          y: 0
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 640,
      y: 550
    },
    display: [60, 73],
    fontSize: 20,
    lines: ["Love-oil"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 66],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "text",
    position: {
      x: 1200,
      y: 550
    },
    display: [60, 73],
    fontSize: 20,
    lines: ["Logic-ium"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 66],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "text",
    position: {
      x: -600,
      y: 600
    },
    display: [60, 73],
    fontSize: 30,
    lines: ["ラヴォイル"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 69],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [60, 69],
        options: {
          x: 1180,
          y: 0
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 2360,
      y: 600
    },
    display: [60, 73],
    fontSize: 30,
    lines: ["ロジッキウム"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 69],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [60, 69],
        options: {
          x: -1160,
          y: 0
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: -700,
      y: 730
    },
    display: [60, 73],
    fontSize: 30,
    lines: ["パッショノイル"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 69],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [60, 69],
        options: {
          x: 1180,
          y: 0
        }
      }]
  },
  {
    type: "text",
    position: {
      x: 2410,
      y: 730
    },
    display: [60, 73],
    fontSize: 30,
    lines: ["フィロソフィウム"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 69],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [60, 69],
        options: {
          x: -1170,
          y: 0
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 550,
      y: 680
    },
    display: [60, 73],
    fontSize: 20,
    fontWeight: "bold",
    lines: ["Passion-oil"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 66],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "text",
    position: {
      x: 1260,
      y: 680
    },
    display: [60, 73],
    fontSize: 20,
    fontWeight: "bold",
    lines: ["Pholosoph-ium"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 66],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "text",
    position: {
      x: 570,
      y: 820
    },
    display: [60, 73],
    fontSize: 20,
    lines: ["Positive-oil"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 66],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "text",
    position: {
      x: 1230,
      y: 820
    },
    display: [60, 73],
    fontSize: 20,
    lines: ["Leadership-ium"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 66],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "text",
    position: {
      x: -680,
      y: 870
    },
    display: [60, 73],
    fontSize: 30,
    lines: ["ポジティボイル"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 69],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [60, 69],
        options: {
          x: 1180,
          y: 0
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 2380,
      y: 870
    },
    display: [60, 73],
    fontSize: 30,
    lines: ["リーダーシッピウム"],
    fontWeight: "bold",
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 69],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [60, 69],
        options: {
          x: -1150,
          y: 0
        }
      }
    ]
  },
  {
    type: "text",
    position: {
      x: 730,
      y: 950
    },
    display: [60, 73],
    fontSize: 20,
    fontWeight: "bold",
    lines: ["Calm-oil"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 66],
      options: {
        start: 0,
        end: 1
      }
    }
    ]
  },
  {
    type: "text",
    position: {
      x: 1100,
      y: 950
    },
    display: [60, 73],
    fontSize: 20,
    fontWeight: "bold",
    lines: ["Creativity-ium"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 66],
      options: {
        start: 0,
        end: 1
      }
    }
      // {
      //     type: "translate",
      //     range: [60, 66],
      //     options: {
      //         x: -500,
      //         y: 0
      //     }
      // },
    ]
  },
  {
    type: "text",
    position: {
      x: -500,
      y: 1000
    },
    display: [60, 73],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["カーモイル"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 69],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [60, 69],
        options: {
          x: 1180,
          y: 0
        }
      }
      // {
      //     type: "translate",
      //     range: [60, 66],
      //     options: {
      //         x: -500,
      //         y: 0
      //     }
      // },
    ]
  },
  {
    type: "text",
    position: {
      x: 2260,
      y: 1000
    },
    display: [60, 73],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["クリエイティヴィティウム"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [60, 69],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "translate",
        range: [60, 69],
        options: {
          x: -1170,
          y: 0
        }
      }
    ]
  },
  //nextPage
  {
    type: "text",
    position: {
      x: 600,
      y: 150
    },
    display: [73, 80],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["自己概念"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [73, 77],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "textCenter",
    position: {
      x: 960,
      y: 200
    },
    display: [73, 80],
    fontSize: 80,
    fontWeight: "bold",
    lines: ["Who am I ?をリデザインする。"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [73, 77],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "image",
    display: [73, 80],
    actions: [
      {
        type: "opacity",
        range: [73, 77],
        options: {
          start: 0,
          end: 1
        }
      },
      {
        type: "translate",
        range: [73, 77],
        options: {
          x: 0,
          y: -800
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/WomenAndThinking.webp",
    position: {
      x: 500,
      y: 1080
    },
    width: 900
  },
  {
    type: "textCenter",
    position: {
      x: 960,
      y: 280
    },
    display: [73, 80],
    fontSize: 40,
    fontWeight: "bold",
    lines: ["内なる世界で開拓された想いを"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [73, 77],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "textCenter",
    position: {
      x: 960,
      y: 330
    },
    display: [73, 80],
    fontSize: 40,
    fontWeight: "bold",
    lines: ["ヒトコトにギュッとまとめて言語化しよう。"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [73, 77],
      options: {
        start: 0,
        end: 1
      }
    }]
  },
  {
    type: "image",
    display: [73, 80],
    actions: [
      {
        type: "opacity",
        range: [73, 77],
        options: {
          start: 0,
          end: 1
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/Asset Earth.webp",
    position: {
      x: 1600,
      y: 350
    },
    width: 150
  },
  //nextPage
  {
    type: "text",
    position: {
      x: 430,
      y: 140
    },
    display: [80, 100],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["Identity"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [82, 89],
      options: {
        start: 0,
        end: 1
      }
    }, {
      type: "opacity",
      range: [89, 96],
      options: {
        start: 1,
        end: 0
      }
    }
    ]
  },
  {
    type: "text",
    position: {
      x: 1110,
      y: 140
    },
    display: [80, 100],
    fontSize: 30,
    fontWeight: "bold",
    lines: ["Position"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [82, 89],
      options: {
        start: 0,
        end: 1
      }
    }, {
      type: "opacity",
      range: [89, 96],
      options: {
        start: 1,
        end: 0
      }
    }
    ]
  },
  {
    type: "textCenter",
    position: {
      x: 960,
      y: 200
    },
    display: [80, 100],
    fontSize: 80,
    fontWeight: "bold",
    lines: ["何者として、どこが居場所なのか？"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [80, 89],
      options: {
        start: 0,
        end: 1
      }
    },
      {
        type: "opacity",
        range: [89, 96],
        options: {
          start: 1,
          end: 0
        }
      }
    ]
  },
  {
    type: "textCenter",
    position: {
      x: 960,
      y: 280
    },
    display: [80, 100],
    fontSize: 40,
    fontWeight: "bold",
    lines: ["インナーバースを統合し、リアルバースを変革する。"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [80, 89],
      options: {
        start: 0,
        end: 1
      }
    }, {
      type: "opacity",
      range: [89, 96],
      options: {
        start: 1,
        end: 0
      }
    }
    ]
  },
  {
    type: "textCenter",
    position: {
      x: 960,
      y: 330
    },
    display: [80, 100],
    fontSize: 40,
    fontWeight: "bold",
    lines: ["本当の自分のど真ん中な領域に在り続けよう。"],
    color: "white",
    actions: [{
      type: "opacity",
      range: [80, 89],
      options: {
        start: 0,
        end: 1
      }
    }, {
      type: "opacity",
      range: [89, 96],
      options: {
        start: 1,
        end: 0
      }
    }
    ]
  },
  {
    type: "image",
    display: [82, 100],
    actions: [
      {
        type: "translate",
        range: [82, 89],
        options: {
          x: 1045,
          y: 0
        }
      },
      {
        type: "opacity",
        range: [82, 89],
        options: {
          start: 0,
          end: 1
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/noCloud.webp",
    position: {
      x: -550,
      y: 400
    },
    width: 500
  },
  {
    type: "image",
    display: [82, 100],
    actions: [
      {
        type: "translate",
        range: [82, 89],
        options: {
          x: -1000,
          y: 0
        }
      },
      {
        type: "opacity",
        range: [82, 89],
        options: {
          start: 0,
          end: 1
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/Asset Earth.webp",
    position: {
      x: 1870,
      y: 400
    },
    width: 500
  },
  {
    type: "image",
    display: [85, 96],
    actions: [
      {
        type: "opacity",
        range: [85, 89],
        options: {
          start: 0,
          end: 1
        }
      },
      {
        type: "opacity",
        range: [89, 96],
        options: {
          start: 1,
          end: 0
        }
      }
    ],
    src: "/images/InnerverseJourney/ThreePeople2/Woman.webp",
    position: {
      x: 880,
      y: 500
    },
    width: 170
  },
  {
    type: "textCenter",
    position: {
      x: 960,
      y: 1000
    },
    display: [82, 100],
    fontSize: 50,
    fontWeight: "bold",
    lines: ["セントラルゾーン"],
    color: "white",
    actions: [
      {
        type: "opacity",
        range: [82, 89],
        options: {
          start: 0,
          end: 1
        }
      },
      {
        type: "opacity",
        range: [90, 96],
        options: {
          start: 1,
          end: 0
        }
      }
    ]
  }

];
