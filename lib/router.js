Router.route('/', {
    name: 'home',
    template: "home"
});

Router.route('/teams', {
    name: 'teamList',
    template: "teamList"
});

Router.route('/players', {
  name: 'playersList',
  template: 'playersList'
});

Router.route('/login', {
  name: 'login',
  template: 'login'
});

Router.route('/register', {
  name: 'register',
  template: 'register'
});
