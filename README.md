### Part 1. Project Description
This repository stores the frontend for SisterGlobal's WeChat miniprogram.
- Current Tech Stack: 微信小程序原生（Vanilla JS + WeUI)
- Possible Future Transition to React Native + Taro (Pending Discussion): 优化性能 + 功能更完善
- Progress Tracking (Jira): https://awfultangerine-1723447707628.atlassian.net/jira/software/projects/KAN/boards/1
- Documentation (Confluence): https://awfultangerine-1723447707628.atlassian.net/wiki/x/YAAC

### Part 2. Features Progress by Tab
#### Tab 1: 换宿
##### Feature 1: 主页所有房源展示 (Scope/Difficulty：Middle)
- Function：80% Done
  - TBD：解决Blockers（Forward Button和Search Column的功能区分？）
- Style：20% Done
  - TBD：General CSS Layout Adjustment
##### Feature 2: 多条件搜索功能 (Scope/Difficulty：Hard)
- Function：60% Done
  - TBD：解决Blockers（1-使用什么API获得全球城市数据？不能一直hardcode下去；2-所有条件都精确搜索还是模糊搜索？）完善功能
- Style：20% Done
  - TBD：
    - Search Results和搜索页分离；
    - General CSS Layout Adjustment
##### Feature 3: 查看房源细节+发送申请（Scope/Difficulty：Easy)
- Function：90% Done, Need Live Testing
  - TBD：
    - 在手机上测试“复制微信号到手机剪切板”的功能
    - User Data 信息补完; Possible Change to Data Schema
- Style：20% Done
  - TBD：
    - Search Results和搜索页分离；
    - General CSS Layout Adjustment
  

#### Tab 2: 心愿单
##### Feature 4: 心愿单 (Scope/Difficulty：Middle)
- Function：80% Done
  - TBD：收藏/已申请的分类
- Style：0% Done
  - TBD：The "Like" effect，General CSS Layout Adjustment

#### Tab 3: 我的
##### Feature 4: 新建房源+房源管理 (Scope/Difficulty：Middle)
##### Feature 5: 申请管理 (Scope/Difficulty：Middle)
##### Feature 6: 个人信息管理 (Scope/Difficulty：Middle)
##### Feature 7: Contact Us / 联系开发者 (Scope/Difficulty：Easy)


### Part 3. Connection with Backend
#### TODO1: CRUD Refinement
- Better have API endpoints, mock data at the database, and get tested for connecting FE & BE
#### TODO2: Tech Stack Choice on Database / Serverless



