<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

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

/** Basic Definitions **
 * Use mv_trellis_child_set_options() to define the child theme version and other necessary settings. .
 * Options::set_multiple will enqueue stylesheets and scripts.
 * 
 * To learn more about functions available to Trellis child themes, see: https://mediavine.github.io/trellis-docs/reference/functions/
 * To learn more about settings available to Trellis child themes, see: https://mediavine.github.io/trellis-docs/getting-started/trellis-settings/
 */

function mv_trellis_child_set_options() {
    $child_version = '0.0.1';

    \Mediavine\Trellis\Options::set_multiple(
        [
            'child_name'    => 'Crewel Ghoul',
            'child_version' => $child_version,
            'child_css'     => get_stylesheet_directory_uri() . "/assets/index.$child_version.css",
        ]
    );

      /** Accent Color and Headings Support **
     * Use add_theme_support to use accent colors and heading options defined in Trellis Settings.
     */

    add_theme_support( 'mv_trellis_background_accent_color' );
    add_theme_support( 'mv_trellis_headings_control' );
  }

add_action( 'mv_trellis_parent_loaded', 'mv_trellis_child_set_options' );

// load React components

function load_assets() {
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  // wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'load_assets');