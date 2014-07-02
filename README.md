# WearHacks

## Getting Started

1. Install [Git](http://git-scm.com/downloads) and [NodeJS](http://nodejs.org/download/), if you don't have it yet.

2. Open your terminal and download [DocPad](https://github.com/bevry/docpad) through this command:

		[sudo] npm install -fg docpad@6.53.4

3. Now clone it:

		git clone git://github.com/turbosnail9/furry-octo-wookie.git

4. Then go to the project's folder:

		cd conf-boilerplate

5. Install all dependencies:

		docpad install

6. And finally run:

		docpad run

Now you can see the website running in `localhost:9778`.

7. You can deploy to Github pages by running:

		docpad deploy-ghpages --env static
