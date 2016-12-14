Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});
Router.route('/', {
    name: 'home',
    template: "home"
});

Router.route('/teams', {
    name: 'teamList',
    template: "teamList"
});
Router.route('/team/add', {
  name: 'formAddTeam',
  template: 'formAddTeam'
});
Router.route('/players', {
  name: 'playersList',
  template: 'playersList'
});

Router.route('/player/add', {
  name: 'formAddPlayer',
  template: 'formAddPlayer'
});

Router.route('/login', {
  name: 'login',
  template: 'login'
});

Router.route('/register', {
  name: 'register',
  template: 'register'
});
