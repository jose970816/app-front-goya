export interface MenuItem {
    name: string;
    icon: string;
    link?: string;
    children?: MenuItem[];
  }
  
  // Ejemplo de datos
  const menuItems: MenuItem[] = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      link: '/dashboard',
      children: []
    },
    {
      name: 'Mi Bandeja',
      icon: 'mark_email_unread',
      children: [
        {
          name: 'iOS',
          icon: 'phone_iphone',
          link: '/ios',
          children: []
        },
        {
          name: 'Android',
          icon: 'android',
          link: '/android',
          children: []
        }
      ]
    },
    {
      name: 'Distribucion Carga',
      icon: 'developer_board',
      children: [
        {
          name: 'Spring',
          icon: 'cloud',
          link: '/spring',
          children: []
        },
        {
          name: 'Hibernate',
          icon: 'storage',
          link: '/hibernate',
          children: []
        },
        {
          name: 'Struts',
          icon: 'settings_input_svideo',
          link: '/struts',
          children: []
        }
      ]
    },
    {
      name: 'Consultas',
      icon: 'manage_search',
      link: '/consultas',
      children: []
    },
    {
      name: 'Tracking',
      icon: 'monitor_heart',
      link: '/tracking',
      children: []
    },
    {
      name: 'Administracion',
      icon: 'settings_applications',
      link: '/administracion',
      children: []
    },
  ];
  