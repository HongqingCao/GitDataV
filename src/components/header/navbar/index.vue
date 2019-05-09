<template>
  <div class="navbar">
    <div class="navbar-header">
      <a class="navbar-brand" href="index.html"> </a>
    </div>
    <nav class="top-nav" role="navigation">
      <ul class="nav navbar-nav pull-right">
        <li>
          <a href="#" id="toggle-header-area"><i class="ec-download"></i></a>
        </li>
        <li class="dropdown">
          <a href="#" data-toggle="dropdown">
            <img
              class="user-avatar"
              src="assets/img/avatars/48.jpg"
              alt="SuggeElson"
            />SuggeElson</a
          >
          <ul class="dropdown-menu right" role="menu">
            <li>
              <a href="profile.html"><i class="st-user"></i> Profile</a>
            </li>
            <li>
              <a href="file.html"><i class="st-cloud"></i> Files</a>
            </li>
            <li>
              <a href="#"><i class="st-settings"></i> Settings</a>
            </li>
            <li>
              <a href="login.html"><i class="im-exit"></i> Logout</a>
            </li>
          </ul>
        </li>
        <li id="toggle-right-sidebar-li">
          <a href="#" id="toggle-right-sidebar"
            ><i class="ec-users"></i> <span class="notification">3</span></a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style></style>
