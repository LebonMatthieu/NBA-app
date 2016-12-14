Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});
Router.route('/', {
    name: 'home',
    template: "home",
});

Router.route('/config', {
    name: 'config',
    template: "config",
});

Router.route('/teams', {
    name: 'teamList',
    template: "teamList",
    onBeforeAction: function () {
    if (!Meteor.userId()) {
      this.render('login');
    } else {
      this.next();
    }
  }
});
Router.route('/team/add', {
  name: 'formAddTeam',
  template: 'formAddTeam',
  onBeforeAction: function () {
  if (!Meteor.userId()) {
    this.render('login');
  } else {
    this.next();
  }
}
});
Router.route('/players', {
  name: 'playersList',
  template: 'playersList',
  onBeforeAction: function () {
  if (!Meteor.userId()) {
    this.render('login');
  } else {
    this.next();
  }
}
});

Router.route('/player/add', {
  name: 'formAddPlayer',
  template: 'formAddPlayer',
  onBeforeAction: function () {
  if (!Meteor.userId()) {
    this.render('login');
  } else {
    this.next();
  }
}
});

Router.route('/login', {
  name: 'login',
  template: 'login'
});

Router.route('/register', {
  name: 'register',
  template: 'register'
});
