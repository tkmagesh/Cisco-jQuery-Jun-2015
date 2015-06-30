 $.fn.makeHint = function(){
    $(this).filter("[data-hint-text]").each(function(index, element){
            var $element = $(element);
            var hintText = $element.attr("data-hint-text");
            $element
                .addClass("hint")
                .val(hintText)
                .focus(function(){
                    var $this = $(this);
                    if ($this.val() === hintText){
                        $this.val('').removeClass("hint");
                    }
                })
                .blur(function(){
                    var $this = $(this);
                    if ($this.val() === ""){
                        $this.val(hintText).addClass("hint");
                    }
                });
        });
    };
