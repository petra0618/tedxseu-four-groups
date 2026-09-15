// =====================================================================
//  TEDxSEU 四组介绍互动组件 · config.js
//
//  这是唯一需要日常修改的文件：
//  文字内容、颜色、尺寸、字体、字号、字重、行高、字间距，全部都在这里。
//  保存后刷新 index.html 即可看到效果，不需要改动其他任何文件。
//
//  颜色规范取自原推文设计系统：
//    黑 #0A0A0C（--ink）· 红 #E62B1E（--red）
// =====================================================================

window.FOUR_GROUPS_CONFIG = {

  /* ================= 一、四组文案 ================= */
  /* 想改哪句话，直接改引号里的文字即可（引号保留）。
     文字可以任意加长、换行，组件会自动换行、不会截断。 */
  groups: {
    talker: {
      title: "嘉宾组",
      english: "TALKER ASSISTANT",
      description: "工作内容：挖掘教授、校友、创业者中能激发对话、推动变革的思想者，通过一次次对谈抽丝剥茧。将讲者的丰富经历淬炼为短小精悍的演讲，从初稿到登台，为每一场演讲保驾护航。要求：善于倾听，有共情力。 在对接过程中与讲者产生深度链接。"
    },
    editor: {
      title: "编辑组",
      english: "EDITOR",
      description: "工作内容：参与策划TEDxSEU品牌播客录制、撰写公众号推文、剪辑演讲视频、运营B站小红书账号、为TED.com供稿视频。要求：文字敏感度或新媒体嗅觉（不会剪辑？资深学长学姐手把手教！）。"
    },
    designer: {
      title: "设计组",
      english: "DESIGNER",
      description: "工作内容：从年度大会的舞台背景、公众号头图到文创周边的制作，设计组用视觉语言定义活动气质，为观点锻造视觉骨骼。当色彩、线条成为思想的扩音器，传播便不再受限于语言的边疆。要求：审美在线，熟练使用PS/AI/PR等工具（零基础但热爱设计？Workshop培训助你成长！）。"
    },
    outreach: {
      title: "社群组",
      english: "OUTREACHER",
      description: "工作内容：对接校外企业赞助、联动各高校社团；为社员组织丰富多彩的团建活动；统筹财务，合理分配预算，确保每一分钱用在刀刃上。要求：沟通力MAX，热衷开拓资源，或对活动落地有极致细节控。"
    }
  },

  /* ================= 二、颜色 ================= */
  colors: {
    background: "#0A0A0C",                  // 组件背景（黑）
    xColor: "#E62B1E",                      // X 的颜色（TEDx 红，取自原推文 --red）
    frontText: "#FFFFFF",                   // 四组中文标签颜色
    frontEnglish: "rgba(255,255,255,0.6)",  // 四组英文标签颜色
    centerMark: "#FFFFFF",                  // 中心 X 字符颜色
    hoverFill: "rgba(230,43,30,0.10)",      // 点击区域悬停/按压提示填充
    backTitle: "#FFFFFF",                   // 背面中文组名颜色
    backEnglish: "rgba(255,255,255,0.55)",  // 背面英文颜色
    backBody: "rgba(255,255,255,0.85)",     // 背面介绍正文颜色
    backHint: "rgba(255,255,255,0.45)",     // 返回提示颜色
    backTick: "#E62B1E"                     // 背面红色角标颜色
  },

  /* ================= 三、尺寸 ================= */
  size: {
    width: 340,        // 组件宽度（px）——组件大小主要由这里决定
    height: 340,       // 兜底高度（px）：现代浏览器会自动保持正方形，此值仅作兜底，请与 width 保持一致
    xInset: 0,         // X 相对边框的内缩百分比（0–49），0 = 顶角到顶角
    xLineWidth: 4,     // X 的粗细（px）。数字越大越粗
    backPadding: 28    // 背面文字区域的内边距（px）
  },

  /* ================= 四、字体与排版 ================= */
  typography: {
    fontCN: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
    fontEN: '"Helvetica Neue", Helvetica, Arial, sans-serif',

    frontTitleSize: 16,         // 前面中文组名字号（px）
    frontTitleWeight: 700,      // 前面中文组名字重
    frontTitleLineHeight: 1.4,  // 前面中文组名行高
    frontTitleTracking: "0em",  // 前面中文组名字间距
    frontEnglishSize: 11,       // 前面英文组名字号（px）
    frontEnglishWeight: 700,    // 前面英文组名字重
    frontEnglishTracking: "0.18em",  // 前面英文字间距
    frontLabelGap: 6,           // 前面中文与英文标签之间的距离（px）

    backTitleSize: 28,          // 背面中文组名字号（px）
    backTitleWeight: 700,       // 背面中文组名字重
    backTitleLineHeight: 1.3,   // 背面中文组名行高
    backTitleTracking: "0em",   // 背面中文组名字间距
    backEnglishSize: 11,        // 背面英文字号（px）
    backEnglishWeight: 700,     // 背面英文字重
    backEnglishTracking: "0.18em",   // 背面英文字间距
    backTitleEnglishGap: 6,     // 背面中文组名与英文之间的距离（px）

    backBodySize: 15,           // 背面介绍正文字号（px）——想把正文变大就改这里
    backBodyWeight: 400,        // 背面介绍正文字重
    backBodyLineHeight: 1.9,    // 背面介绍正文行距
    backBodyTracking: "0.03em", // 背面介绍正文字间距
    backTitleGap: 18,           // 背面标题与正文之间的距离（px）

    backHintSize: 12,           // 返回提示字号（px）
    centerMarkSize: 14,         // 中心 X 字符字号（px）
    centerMarkWeight: 700       // 中心 X 字符字重
  },

  /* ================= 五、其他文字 ================= */
  texts: {
    centerMark: "X",              // 中心字符：字母 X（任何手机都渲染一致；也可改成 "✕" 或 "" 隐藏）
    backHint: "点击任意处返回"      // 返回提示文字
  }
};
