<?php

/*
Plugin Name: H2ML Grid B
Author: Jack Notman
Version: 1.0.0
*/

/**
 * Register the Blocks
 */

 /*
add_action('init', function() {
	register_block_type(__DIR__ . '/block/build');
});
*/

add_action('init', function() {
	foreach (glob(__DIR__ . "/blocks/build/*") as $blockPath) {
		register_block_type($blockPath);
	}
});