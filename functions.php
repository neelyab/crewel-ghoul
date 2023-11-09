<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
            echo $uri;
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );
         
if ( !function_exists( 'child_theme_configurator_css' ) ):
    function child_theme_configurator_css() {
        wp_enqueue_style( 'chld_thm_cfg_separate', trailingslashit( get_stylesheet_directory_uri() ) . 'ctc-style.css', array( 'mv-trellis' ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'child_theme_configurator_css', 10 );

/**
 * Font Awesome Kit Setup
 *
 * This will add your Font Awesome Kit to the front-end, the admin back-end,
 * and the login screen area.
 */
if (! function_exists('fa_custom_setup_kit') ) {
    function fa_custom_setup_kit($kit_url = '') {
      foreach ( [ 'wp_enqueue_scripts', 'admin_enqueue_scripts', 'login_enqueue_scripts' ] as $action ) {
        add_action(
          $action,
          function () use ( $kit_url ) {
            wp_enqueue_script( 'font-awesome-kit', $kit_url, [], null );
          }
        );
      }
    }
  }

fa_custom_setup_kit('https://kit.fontawesome.com/1fefd12715.js');

// END ENQUEUE PARENT ACTION
function mv_trellis_child_set_options() {
  $child_version = '0.0.1';
  \Mediavine\Trellis\Options::set_multiple(
      [
          'child_name'    => '<your theme name>',
          'child_version' => $child_version,
          'child_css'     => get_stylesheet_directory_uri() . "/assets/dist/css/main.$child_version.css",
          'child_js'      => get_stylesheet_directory_uri() . "/assets/dist/js/main.$child_version.js",
      ]
  );
}
add_action( 'mv_trellis_parent_loaded', 'mv_trellis_child_set_options' );

add_filter( 'mv_trellis_enqueue_main_style', '__return_false' );
