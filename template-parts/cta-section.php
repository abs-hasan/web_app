<section class="cta-section">
    <!-- Animated Gradient Blobs -->
    <div class="gradient-blob blob-blue"></div>
    <div class="gradient-blob blob-purple"></div>

    <!-- Floating Sparkles -->
    <div class="sparkles-container" id="sparklesContainer"></div>

    <!-- Radial Pulse Waves -->
    <div class="pulse-container">
        <div class="pulse-ring"></div>
        <div class="pulse-ring"></div>
        <div class="pulse-ring"></div>
    </div>

    <!-- Floating Side Icons -->
    <div class="floating-icon icon-left">🚀</div>
    <div class="floating-icon icon-right">💼</div>

    <!-- Content -->
    <div class="cta-content">
        <h2 class="cta-title fade-in fade-in-delay-1">
            Ready to Grow Your Business?
        </h2>

        <p class="cta-description fade-in fade-in-delay-2">
            Book a free strategy call and get a clear, simple plan to improve your marketing, 
            website and online presence.
        </p>

        <div class="fade-in fade-in-delay-3">
            <button type="button" class="cta-button" data-open-cta-modal>
                <div class="button-shine"></div>
                <div class="button-glow"></div>
                <span class="calendar-icon">📅</span>
                <span style="position: relative; z-index: 1;">Book a Free Strategy Call</span>
            </button>
        </div>
    </div>

    <!-- Modal with WPForms -->
    <div class="cta-modal" id="cta-modal" aria-hidden="true">
        <div class="cta-modal-backdrop" data-close-cta-modal></div>
        <div class="cta-modal-content" role="dialog" aria-modal="true" aria-labelledby="cta-modal-title">
            <button class="cta-modal-close" type="button" data-close-cta-modal aria-label="Close form">×</button>
            <h3 id="cta-modal-title">Tell us about your business</h3>
            <div class="cta-modal-body">
                <?php
                // Replace 123 with your WPForms form ID
                if (function_exists('wpforms') || shortcode_exists('wpforms')) {
                    echo do_shortcode('[wpforms id="123" title="false" description="false"]');
                } else {
                    echo '<p>Add a WPForms form and update the ID here.</p>';
                }
                ?>
            </div>
        </div>
    </div>
</section>
