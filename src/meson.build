pkgdatadir = get_option('datadir') / meson.project_name()
gnome = import('gnome')

src_res = gnome.compile_resources('io.github.andrepg.httpcodes.src',
  'io.github.andrepg.httpcodes.src.gresource.xml',
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir,
)

data_res = gnome.compile_resources('io.github.andrepg.httpcodes.data',
  'io.github.andrepg.httpcodes.data.gresource.xml',
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir,
)

bin_conf = configuration_data()
bin_conf.set('GJS', find_program('gjs').full_path())
bin_conf.set('PACKAGE_VERSION', meson.project_version())
bin_conf.set('PACKAGE_NAME', meson.project_name())
bin_conf.set('prefix', get_option('prefix'))
bin_conf.set('libdir', get_option('prefix') / get_option('libdir'))
bin_conf.set('datadir', get_option('prefix') / get_option('datadir'))
bin_conf.set('resource_path', '/io/github/andrepg/httpcodes')

configure_file(
  input: 'io.github.andrepg.httpcodes.in',
  output: 'io.github.andrepg.httpcodes',
  configuration: bin_conf,
  install: true,
  install_dir: get_option('bindir')
)
