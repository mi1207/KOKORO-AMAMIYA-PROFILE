Alpine.data("inputData", () => ({
    inputList: [
        {
            title: "お名前",
            placeholder:"例：HAL東京",
            type: "text",
            value: "",
            message: "",
            validate() {
                // 1文字以上48文字以下
                if (this.value.length > 0 && this.value.length <= 48) {
                    this.message = "";
                } else {
                    this.message =
                        "お名前は1文字以上48文字以下で入力してください。";
                }
            },
        },
        {
            title: "所属",
            placeholder:"例：HAL東京入学相談室",
            type: "text",
            value: "",
            message: "",
            validate() {},
        },
        {
            title: "メール",
            placeholder:"例：nyugaku.tokyo@hal.ac.jp",
            type: "email",
            value: "",
            message: "",
            validate() {},
        },
        {
            title: "件名",
            placeholder:"例：入学相談について",
            type: "text",
            value: "",
            message: "",
            validate() {},
        },
        {
            title: "本文",
            placeholder:"こちらに本文を入力してください",
            type: "textarea",
            value: "",
            message: "",
            validate() {},
        },
    ],
}));