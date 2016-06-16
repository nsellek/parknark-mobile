var Staze = Staze || {};

Staze.LogInController = function(){
  this.$logInPage = null;
  this.$logInBtnSubmit = null;
  this.$logInEmail = null;
  this.$logInPass = null;
  this.logInView = null;
}

Staze.LogInController.prototype.init = function(){
  this.$logInPage = $("#page-login");
  this.$logInBtnSubmit = $("#login-btn-submit", this.$logInPage);
  this.$logInEmail = $("#login-email", this.$logInPage);
  this.$logInPass = $("#login-password", this.$logInPage);
  this.logInView = $("#loged-in-view");
}
