<?php 

  //Remove a tag "<p>" dos posts
  remove_filter( 'the_content', 'wpautop' );

  // Adiciona as imagens nos post
  add_theme_support( 'post-thumbnails' ); 

  add_image_size( 'servicos' , 500, 500, true );


  // Adiciona os Menus
  add_theme_support ('menus');
 ?>
