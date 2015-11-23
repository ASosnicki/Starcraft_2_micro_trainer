<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Game Gym</title>
	<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/css/materialize.min.css">
	{!! HTML::style('css/landing.css') !!}
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col s12 m12 l12">
				<div class="section scrollspy">
					<ul class="collapsible popout collapsible-accordion">
						<li>
							<div class="collapsible-header active">Login</div>
							<div class="collapsible-body">
								<p>Login</p>
								<a href="">Login with Google</a>
								<a href="">Login with Facebook</a>
								<a href="">Login with Twitter</a>
								<p>Play Without Logging In</p>
							</div>
						</li>
						<li>
							<div class="collapsible-header">Register</div>
							<div class="collapsible-body">
								<p>Register an account.</p>
								<a href="">Register with your Google account</a>
								<a href="">Register with your Facebook account</a>
								<a href="">Register with your Twitter account</a>
							</div>
						</li>
						<li>
							<div class="collapsible-header">About Game Gym</div>
							<div class="collapsible-body">
								<p>Why we are the way we are.</p>
							</div>
						</li>
						<li>
							<div class="collapsible-header">Contact Us</div>
							<div class="collapsible-body">
								<p>How to get a hold of us.</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js"></script>
	{!! HTML::script('js/landing.js') !!}
</body>
</html>