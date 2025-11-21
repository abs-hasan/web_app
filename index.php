<?php
/**
 * Main Template File
 * 
 * @package TopPage
 */

get_header(); ?>

<main id="main-content">
    <div class="container">
        <?php
        if (have_posts()) :
            while (have_posts()) :
                the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <h2><?php the_title(); ?></h2>
                    <div class="entry-content">
                        <?php the_content(); ?>
                    </div>
                </article>
                <?php
            endwhile;
        else :
            ?>
            <p><?php esc_html_e('No content found', 'toppage'); ?></p>
            <?php
        endif;
        ?>
    </div>
</main>

<?php get_footer(); ?>
