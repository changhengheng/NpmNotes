module.exports = {
    title: 'npmNotes', // 设置网站标题
    dest: './dist',  // 设置输出目录，这个目录后续部署到github上的时候会用到
    base: '/NpmNotes/',// 设置站点根路径
    repo: 
    'https://github.com/changhengheng/NpmNotes.git', // 添加 github 链接
    themeConfig: {
        lastUpdated: '上次更新',
        smoothScroll: true,
        nav: [
          { text: 'External', link: 'https://github.com/changhengheng/NpmNotes.git' },
        ],
        sidebar: [
            ['/getting-started/','npm快速入门'],
            ['/getting-started/1.包和包管理器','包和包管理器'],
            ['/getting-started/2.本地安装和全局安装','本地安装和全局安装'],
            ['/getting-started/3.package.json文件','package.json文件'],
            ['/getting-started/4.package-lock.json 文件','package-lock.json 文件'],
            ['/getting-started/5.安装指定版本的包','安装指定版本的包'],
            ['/getting-started/6.卸载包','卸载包'],
            ['/getting-started/7.包运行器npx','包运行器npx'],
          ]
      }
   }
