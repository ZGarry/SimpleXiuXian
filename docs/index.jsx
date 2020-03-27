---
banner:
  name: '修仙聊天室，从未如此简单！'
  desc: '专为书友群打造的修仙故事集～'
  btns: 
    - { name: '开 始', href: './begin/index.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/YMFE/ydoc' }
  caption: '当前版本: v0.7'
features: 
  - { name: '好玩', desc: '一个随时在线的调皮机器人，一场华丽的冒险' }
  - { name: '简单', desc: '三分钟，将这个机器人托管到你的QQ群' }
  - { name: '可扩充', desc: '无需改动代码，大部分文案，等级即可自定义！' }
  - { name: '开源', desc: '代码完全开源，你可以扩展出你想要打造的全新版本！' }

footer:
  copyRight:
    name: '蒸发杰作'
    href: ''
  links:
    团队网址:
      - { name: 'YMFE', href: 'https://ymfe.org/' }
      - { name: 'YMFE Blog', href: 'https://blog.ymfe.org/' }
    Git仓库:
      - { name: 'Github', href: 'https://github.com/YMFE/ydoc' }
      - { name: 'Github Issue', href: 'https://github.com/YMFE/ydoc/issues' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />