<header class="header">
	<div class="wrapper wrapper-header">
		<?php mvt_header_top(); ?>
        <div class="top-header-container">
            <div class="left-header">
                <ul>
                    <a href = "https://crewelghoul.com/about">
                        <li>ABOUT</li>
                    </a>
                    <a href = "https://crewelghoul.com/contact">
                        <li>CONTACT</li>
                    </a>
                </ul>
            </div>
            <div class="right-header">
                <p>FOLLOW:</p>
                <a href = "https://instagram.com/amandafoxembroidery" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href = "https://youtube.com/@crewelghoul" target="_blank">
                    <i class="fa-brands fa-youtube"></i>                
                </a>
                <a href = "https://pinterest.com/crewelghoul" target="_blank">
                    <i class="fa-brands fa-pinterest"></i>                
                </a>
            </div>
        </div>

        <div class="header-container">
                <?php
                    /**
                     * Outputs the search form in the header.
                     */
                    do_action( 'mv_trellis_search_form' );
                ?>
                <?php mv_trellis_site_title(); ?>
                <?php mv_trellis_get_template_part( 'template-parts/header/navigation' ); ?>
        </div>
		<?php mvt_header_bottom(); ?>
	</div>
</header>
