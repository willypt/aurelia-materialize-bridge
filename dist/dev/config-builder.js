System.register([], function (_export) {
  'use strict';

  var ConfigBuilder;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      ConfigBuilder = (function () {
        function ConfigBuilder() {
          _classCallCheck(this, ConfigBuilder);

          this.useGlobalResources = true;
          this.globalResources = [];
        }

        ConfigBuilder.prototype.useAll = function useAll() {
          return this.useBadge().useBox().useButton().useCard().useCarousel().useCharacterCounter().useCheckbox().useCollapsible().useColors().useDatePicker().useDropdown().useFab().useFile().useInput().useModal().useNavbar().useParallax().usePushpin().useRadio().useRange().useScrollfire().useSelect().useSidenav().useSlider().useSwitch().useTabs().useTooltip().useTransitions().useWaves().useWell();
        };

        ConfigBuilder.prototype.useBadge = function useBadge() {
          this.globalResources.push('./badge/badge');
          return this;
        };

        ConfigBuilder.prototype.useBox = function useBox() {
          this.globalResources.push('./box/box');
          return this;
        };

        ConfigBuilder.prototype.useButton = function useButton() {
          this.globalResources.push('./button/button');
          return this;
        };

        ConfigBuilder.prototype.useCarousel = function useCarousel() {
          this.globalResources.push('./carousel/carousel');
          this.globalResources.push('./carousel/carousel-item');
          return this;
        };

        ConfigBuilder.prototype.useCharacterCounter = function useCharacterCounter() {
          this.globalResources.push('./char-counter/char-counter');
          return this;
        };

        ConfigBuilder.prototype.useCard = function useCard() {
          this.globalResources.push('./card/card');
          return this;
        };

        ConfigBuilder.prototype.useCheckbox = function useCheckbox() {
          this.globalResources.push('./checkbox/checkbox');
          return this;
        };

        ConfigBuilder.prototype.useClickCounter = function useClickCounter() {
          this.globalResources.push('./click-counter');
          return this;
        };

        ConfigBuilder.prototype.useCollapsible = function useCollapsible() {
          this.globalResources.push('./collapsible/collapsible');
          return this;
        };

        ConfigBuilder.prototype.useColors = function useColors() {
          this.globalResources.push('./colors/md-colors.html');
          return this;
        };

        ConfigBuilder.prototype.useDatePicker = function useDatePicker() {
          this.globalResources.push('./datepicker/datepicker');
          return this;
        };

        ConfigBuilder.prototype.useDropdown = function useDropdown() {
          this.globalResources.push('./dropdown/dropdown');
          return this;
        };

        ConfigBuilder.prototype.useFab = function useFab() {
          this.globalResources.push('./fab/fab');
          return this;
        };

        ConfigBuilder.prototype.useFile = function useFile() {
          this.globalResources.push('./file/file');
          return this;
        };

        ConfigBuilder.prototype.useInput = function useInput() {
          this.globalResources.push('./input/input');
          return this;
        };

        ConfigBuilder.prototype.useModal = function useModal() {
          this.globalResources.push('./modal/modal-trigger');
          return this;
        };

        ConfigBuilder.prototype.useNavbar = function useNavbar() {
          this.globalResources.push('./navbar/navbar');
          return this;
        };

        ConfigBuilder.prototype.useParallax = function useParallax() {
          this.globalResources.push('./parallax/parallax');
          return this;
        };

        ConfigBuilder.prototype.usePushpin = function usePushpin() {
          this.globalResources.push('./pushpin/pushpin');
          return this;
        };

        ConfigBuilder.prototype.useRadio = function useRadio() {
          this.globalResources.push('./radio/radio');
          return this;
        };

        ConfigBuilder.prototype.useRange = function useRange() {
          this.globalResources.push('./range/range');
          return this;
        };

        ConfigBuilder.prototype.useScrollfire = function useScrollfire() {
          this.globalResources.push('./scrollfire/scrollfire');
          this.globalResources.push('./scrollfire/scrollfire-target');
          return this;
        };

        ConfigBuilder.prototype.useScrollSpy = function useScrollSpy() {
          this.globalResources.push('./scrollspy/scrollspy');
          return this;
        };

        ConfigBuilder.prototype.useSelect = function useSelect() {
          this.globalResources.push('./select/select');
          return this;
        };

        ConfigBuilder.prototype.useSidenav = function useSidenav() {
          this.globalResources.push('./sidenav/sidenav');
          this.globalResources.push('./sidenav/sidenav-collapse');
          return this;
        };

        ConfigBuilder.prototype.useSlider = function useSlider() {
          this.globalResources.push('./slider/slider');

          return this;
        };

        ConfigBuilder.prototype.useSwitch = function useSwitch() {
          this.globalResources.push('./switch/switch');
          return this;
        };

        ConfigBuilder.prototype.useTabs = function useTabs() {
          this.globalResources.push('./tabs/tabs');
          return this;
        };

        ConfigBuilder.prototype.useTooltip = function useTooltip() {
          this.globalResources.push('./tooltip/tooltip');
          return this;
        };

        ConfigBuilder.prototype.useTransitions = function useTransitions() {
          this.globalResources.push('./transitions/fadein-image');
          this.globalResources.push('./transitions/staggered-list');
          return this;
        };

        ConfigBuilder.prototype.useWaves = function useWaves() {
          this.globalResources.push('./waves/waves');
          return this;
        };

        ConfigBuilder.prototype.useWell = function useWell() {
          this.globalResources.push('./well/md-well.html');
          return this;
        };

        ConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
          this.useGlobalResources = false;
          return this;
        };

        return ConfigBuilder;
      })();

      _export('ConfigBuilder', ConfigBuilder);
    }
  };
});
//# sourceMappingURL=dist/dev/config-builder.js.map
