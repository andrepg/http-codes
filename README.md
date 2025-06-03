# 🖥 Codes Handbook
Codes is a simple and lightweight handbook with HTTP Codes information returned by a server whener you make a request.

This project is a study project. Developed to Linux/GNOME with Javascript, GJS, GTK, Adwaita and packed by Flatpak.

# 🯄  Why
There is a lot of lists and web pages across the internet. All pretty much with same content. Here is the same.

With a catch: writing this was a huge bonus knowledge! An opportunity to understand better these codes, and even discover new ones.

It's an offline handbook to consult and search HTTP Code statuses.

# 🗃 Installation
We are in alpha stage, as can you can see by looking through our releases. So for now there's a single `.flatpak` file to download and install. Also there is no auto update for now. To update is required a new download after a new release event.

> 🎯 The auto update feature is expected to be out on first stable, either on own repository or in **FlatHub**.

# 🖳 Development
We've built this app with GNOME Builder in Flatpak sandbox. With these environment all you need to do is download the source code and build. If you still don't have Builder installed, [take a look here before](https://apps.gnome.org/pt-BR/Builder/).

## Get source
All you need to do is clone this repository in your environment. You can do it with following:

```bash
git clone git@github.com:andrepg/http-codes.git
```

##  Building

We have two ways of building our app. One using GNOME Builder and another using a command line and `flatpak-builder` (**a GNOME Builder requirement**).

### Using GNOME Builder

To *run* the app on debug mode, just open the project and hit `Ctrl+Shift+Espace`. Or you can [checkout the docs](https://builder.readthedocs.io/projects/index.html) about building your project.

After building your project you can Export it from GNOME Builder omnimenu and generate a `.flatpak` file by yourself.

### Using command line

> 🐛 There's still a minor bug in our build system, that fetchs a fresh git repository everytime. A fix is required.

We've developed a one line command to build our flatpak directly from source. You can use the following, inside app's project

```bash
flatpak run org.flatpak.Builder ./build-dir \
    --force-clean \ 
    --verbose \
    --user \ # instruct to act on userland space
    --install \ # instruct to install app after build
    io.github.andrepg.httpcodes.json
```

# ❖ Contribute

If you like this project or see it as useful, and want to contribute, there's some ways you can do it:

1. **Donation**

You can always help the project development by donating via GitHub Sponsor or Patreon. Both these options are available at the repository's sidebar.

2. **Translation**

This is a prototype. And it's developed primary in English as my second language. So a little help on translating and improvement we'll be welcome. We don't even have our app ready to translation yet. *So it's a long road*.

3. **Enhacements and Bug reports**

Finally, if you have suggestions or improvements that you'll be pleased to see in your app, there's always a possibility to fill an issue or open a Pull Request if your proposals.


> Remember: this is a free (as in free beer 🍻), side project developed with learning purposes. Please don't push hard.

<!-- GitAds-Verify: CBCUQUB2Z889IYMN4Q4N5A9TPQCV18BH -->
## GitAds Sponsored
[![Sponsored by GitAds](https://gitads.dev/v1/ad-serve?source=andrepg/http-codes@github)](https://gitads.dev/v1/ad-track?source=andrepg/http-codes@github)
