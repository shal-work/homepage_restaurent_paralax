<template>
    <div class="modal-dialog" id="modal">

        <div class="modal-dialog__header mb-15 pt-15">
            <div class="modal-dialog__header_counter">
                <div class="slideshow__counter_font ml-25">
                    <span class="swiper-pagination-current">1 / 6</span>
                    <!-- <span class="swiper-pagination-current">1</span> / <span class="swiper-pagination-total">6</span> -->
                </div>
            </div>

            <div class="modal-dialog__header_width zIndex-9999">
                    <div class="modal-dialog__header_ico">
                        <!-- <div class="ico-share size-ico mr-25 cursor-pointer "></div> -->
                        <!--окно для ссылок -->
                        <div class="modal-dialog__heade_share">
                            <div class="modal-dialog__heade_links modal-dialog__heade_title">
                                <div class="modal-dialog__heade_link">
                                    <div class="ico-facebook size-ico-15 mr-10"></div>
                                    <a href="https://www.facebook.com" target="_blank">
                                        Поделиться в Facebook 
                                    </a>
                                </div>
                                <div class="modal-dialog__heade_link">
                                    <div class="ico-twitter size-ico-15 mr-10"></div>
                                    <a href="https://twitter.com/intent/tweet?text" target="_blank">
                                        Поделиться в Twitter
                                    </a>
                                </div>
                                <div class="modal-dialog__heade_link">
                                    <div class="ico-pinterest size-ico-15 mr-10"></div>
                                    <a href="https://www.pinterest.com" target="_blank">
                                        Запомнить
                                    </a>
                                </div>
                                <div class="modal-dialog__heade_link modal-dialog__heade_download">
                                    <div class="ico-download size-ico-15 mr-10"></div>
                                    <a href="@/assets/img/fooodiesfeed.com_sweet-and-salty-brunch.jpg" download="fooodiesfeed.com_sweet-and-salty-brunch.jpg">
                                        Скачать изображение
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                    
                    <div class="ico-fullscreen size-ico mr-25 cursor-pointer " data-toggle-fullscreen></div>
                    <div class="ico-minimize size-ico mr-25 cursor-pointer" style="display: none;" data-toggle-minimize></div>
                    <!-- <div class="ico-zoom size-ico mr-25 cursor-pointer "></div>
                    <div class="ico-zoom-minus size-ico mr-25 cursor-pointer" style="display: none;"></div> -->
                    <div class="ico-close size-ico mr-25 cursor-pointer "></div>
                </div>
            </div>
        </div>

        <div class="sliders-wrapper mb-20 mt-60">
            <!-- <div class="sliders"> -->
            <div class="sliders-animated">
                <!-- <div class="sliders-inner"> -->
                <div class="sliders-animated-inner">
                    <div class="sliders-animated-item" style="display: block;">
                        <img src="@/assets/img/fooodiesfeed.com_sweet-and-salty-brunch.jpg" alt="photo">
                    </div>
                <div class="sliders-animated-item">
                        <img src="@/assets/img/foodiesfeed.com_Wedding_15-crop.jpg" alt="photo">
                    </div>
                <div class="sliders-animated-item">
                        <img src="@/assets/img/foodiesfeed.com_Your-Sunny-Side-Up-2-crop.jpg" alt="photo">
                    </div>
                    <div class="sliders-animated-item">
                        <img src="@/assets/img/foodiesfeed.com_traditional-czech-honey-cake-caffee-latte-crop.jpg" alt="photo">
                    </div>
                    <div class="sliders-animated-item">
                        <img src="@/assets/img/foodiesfeed.com_homemade-pizza-crop.jpg" alt="photo">
                    </div>
                    <div class="sliders-animated-item">
                        <img src="@/assets/img/foodiesfeed.com_homemade-waffles-with-coffee.jpg" alt="photo">
                    </div>
                </div>
                <a href="#" class="sliders-animated-prev" data-slide="prev">
                    <span class="sliders-animated-prev-icon">&lt;</span>
                </a>
                <a href="#" class="sliders-animated-next" data-slide="next">
                    <span class="sliders-next-icon">&gt;</span>
                </a>
            </div>
        </div>

        <div> 
            <div class="modal-dialog__footer">
                <div class="modal-dialog__footer_item bold"></div>
            </div>
        </div>




        </div>
</template>


