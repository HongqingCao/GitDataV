export default {
  app: {
    appIntroduce:
      "一个用Vue构建的Github可视化大数据平台。通过它，您可以更加直观看到您在Github里的一些数据情况",
    inputPlaceholder: "输入您的github账号，然后点击生成...",
    namelg: "请输入您的账号，再点生成!",
    account: "账号",
    notFound: " 未找到！",
    clickP: " 点击「生成」按钮将视为您同意",
    clickB: "GitDataV服务条款",
    subscribe: "生成",
    pmodal: {
      title: "GitDataV服务条款",
      thanksP:
        "感谢您使用GitDataV！我们很高兴你在这里。在访问或使用GitDataV之前，请仔细阅读本服务条款协议:",
      aPone: "A、GitDataV通过",
      aPtwo: "github官方api提供接口平台",
      bP:
        "B、本网站只通过用户账号通过官方接口进行查询您的公开相关数据，并对这些数据进行梳理和在网页上展示，网站本身并不存储您任何相关数据",
      cPone:
        "C、本网站由于依赖github官方提供接口，对查询的次数有限制，请勿恶意攻击和压力查询,如果网站有问题请及时与开发者：",
      cPtwo: "联系",
      dP: "D、本网站属于非盈利性质，请勿进行商业用途，源码已开源",
      ePone: "E、其他条款遵循",
      ePtwo: "GitHub服务条款",
      closebtn: "知道了"
    }
  },
  data: {
    index: "温馨提示: 后续还会继续加功能，请关注我github更新...",
    myevent: {
      pubRepos: "公开仓库数",
      followers: "粉丝",
      following: "跟随",
      accountData: "仓库数据",
      noRepoSize: "仓库",
      myevent: "最近操作详情",
      noMyevent: "最近操作",
      table: {
        time: "操作时间",
        type: "类型",
        repos: "操作仓库",
        remarks: "备注"
      }
    },
    dheader: "GitDataV数据平台",
    dleft: {
      accountStars: "仓库Stars详情",
      accountLeng: "仓库语言分类",
      noStarData: "一个Stars",
      nolanguageData: "一种语言"
    },
    dright: {
      index: {
        followers: "新增粉丝",
        noFollowers: "一个粉丝",
        following: "最近跟随",
        noFollowing: "一个跟随",
        messege: "最新消息"
      },
      message: {
        pOne: "给了你一个",
        pTwo: "操作"
      }
    }
  },
  loading: "正在疯狂的计算数据中+-*%....",
  nodata: {
    pOne: "您没有",
    pTwo: "数据"
  }
};
