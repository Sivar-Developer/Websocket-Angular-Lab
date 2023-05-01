import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent implements OnInit {

  mode = false;
  dark = false;

  consoleMenu = [
    {
      name: 'UI Kits',
      icon: 'ant-design',
      children: [
        { name: 'Ant Design', icon: '', router: '/admin/ui-kits/antd'},
        { name: 'Bootstrap', icon: '', router: '/admin/ui-kits/bootstrap'},
      ]
    },
    {
      name: 'Advanced UI',
      icon: 'layout',
      children: [
        { name: 'Email Templates', icon: '', router: '/admin/advanced/email-templates'},
        { name: 'Typography', icon: '', router: '/admin/advanced/typography'},
        { name: 'Utilities', icon: '', router: '/admin/advanced/utilities'},
        { name: 'Grid', icon: '', router: '/admin/advanced/grid'},
        { name: 'Form Examples', icon: '', router: '/admin/advanced/form-examples'},
        { name: 'Invoice', icon: '', router: '/admin/advanced/invoice'},
        { name: 'Pricing Tables', icon: '', router: '/admin/advanced/pricing-tables'},
        { name: 'Colors', icon: '', router: '/admin/advanced/colors'},
      ]
    },
    {
      name: 'Apps',
      icon: 'appstore',
      children: [
        { name: 'Messaging', icon: '', router: '/admin/apps/messaging'},
        { name: 'Calendar', icon: '', router: '/admin/apps/calendar'},
        { name: 'Profile', icon: '', router: '/admin/apps/profile'},
        { name: 'Gallery', icon: '', router: '/admin/apps/gallery'},
        { name: 'Mail', icon: '', router: '/admin/apps/mail'},
        { name: 'GitHub Explorer', icon: '', router: '/admin/apps/github-explore'},
        { name: 'GitHub Discuss', icon: '', router: '/admin/apps/github-discuss'},
        { name: 'Jira Dashboard', icon: '', router: '/admin/apps/jira-dashboard'},
        { name: 'Jira Agile Board', icon: '', router: '/admin/apps/jira-agile-board'},
        { name: 'Todo List', icon: '', router: '/admin/apps/todoist-list'},
        { name: 'Digitalocean Droplets', icon: '', router: '/admin/apps/digitalocean-droplets'},
        { name: 'Digitalocean Create', icon: '', router: '/admin/apps/digitalocean-create'},
        { name: 'Google Analytics', icon: '', router: '/admin/apps/google-analytics'},
        { name: 'Helpdesk Dashboard', icon: '', router: '/admin/apps/helpdesk-dashboard'},
        { name: 'Wordpress Posts List', icon: '', router: '/admin/apps/wordpress-posts'},
        { name: 'Wordpress Post Details', icon: '', router: '/admin/apps/wordpress-post'},
        { name: 'Wordpress Add', icon: '', router: '/admin/apps/wordpress-add'},
      ]
    },
    {
      name: 'Icons',
      icon: 'star',
      children: [
        { name: 'Fontawesome', icon: '', router: '/admin/icons/fontawesome'},
        { name: 'Icomoon', icon: '', router: '/admin/icons/icomoon-free'},
        { name: 'Linearicons', icon: '', router: '/admin/icons/linearicons-free'},
        { name: 'Feather', icon: '', router: '/admin/icons/feather-icons'},
      ]
    },
    {
      name: 'Widgets',
      icon: 'codepen',
      children: [
        { name: 'General', icon: '', router: '/admin/widgets/general'},
        { name: 'Charts', icon: '', router: '/admin/widgets/charts'},
        { name: 'Lists', icon: '', router: '/admin/widgets/lists'},
        { name: 'Tables', icon: '', router: '/admin/widgets/tables'},
      ]
    },
    {
      name: 'Cards',
      icon: 'border',
      children: [
        { name: 'Basic Cards', icon: '', router: '/admin/cards/basic-cards'},
        { name: 'Tabbed Cards', icon: '', router: '/admin/cards/tabbed-cards'},
      ]
    },
    {
      name: 'Tables',
      icon: 'table',
      children: [
        { name: 'Ant Design', icon: '', router: '/admin/tables/antd'},
        { name: 'Bootstrap', icon: '', router: '/admin/tables/bootstrap'},
      ]
    },
    {
      name: 'Charts',
      icon: 'pie-chart',
      children: [
        { name: 'Chartist.js', icon: '', router: '/admin/charts/chartistjs'},
        { name: 'Chart.js', icon: '', router: '/admin/charts/chartjs'},
        { name: 'C3', icon: '', router: '/admin/charts/c3'},
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
