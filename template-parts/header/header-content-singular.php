<?php
if ( ! empty( get_post_meta( get_the_ID(), 'hide-page-title', true ) ) ) {
	return;
}
?>
<header class="entry-header header-singular wrapper">
	<?php mvt_title_before(); ?>
	<h1 class="entry-title article-heading"><?php the_title(); ?></h1>
	<?php mvt_title_after(); ?>
</header>
