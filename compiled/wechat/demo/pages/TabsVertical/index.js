Page({
    data: {
        current: 0,
        scrollTop: 0,
        items: [],
    },
    onLoad() {
        const items = [];
        for (let i = 0; i < 20; i++) {
            items.push({
                title: `第${i + 1}项`,
                content: `第${i + 1}项 Est voluptate sunt consequat laboris proident eu ut qui incididunt sint sint pariatur qui. Ut labore in duis labore cupidatat in ad quis duis aliquip irure occaecat officia reprehenderit consectetur. Enim consequat veniam nulla. Enim do nisi cillum aute pariatur ex dolor mollit ut nisi. Irure non pariatur anim Lorem ad do in elit irure minim exercitation. Dolor aliquip nisi adipisicing sunt adipisicing sunt nisi ad in non laboris in magna dolore. Fugiat aliqua labore elit occaecat consequat. Ipsum officia excepteur anim sint ipsum exercitation laborum. Excepteur exercitation ea occaecat cupidatat et consectetur exercitation non. Incididunt aliqua esse velit nisi ullamco. Do dolore ad ut. Esse ad tempor aliqua cillum consequat occaecat enim dolore enim aliquip aliquip irure. Id aliquip qui nulla dolor dolore et est. Non adipisicing mollit consequat magna sit laborum mollit nulla est consequat. Veniam in eu nisi ex sint deserunt ad sit consequat excepteur qui. Ea est sint adipisicing ea aliqua eiusmod amet pariatur officia ex voluptate. Consectetur in ipsum cillum nulla minim quis aute consequat. Et adipisicing officia nostrud id reprehenderit tempor. Laborum anim aliqua ut enim et pariatur elit tempor tempor incididunt deserunt nulla deserunt enim. Esse deserunt pariatur veniam sunt fugiat irure ullamco excepteur et Lorem. Sit adipisicing nisi consectetur nulla qui sint culpa. In aute cupidatat ad consequat proident est non sint ullamco dolor nisi irure fugiat amet deserunt. Laboris nostrud tempor aute non cillum magna labore ipsum duis ut dolor velit. Qui proident dolor occaecat consequat qui laboris sit est culpa excepteur aliqua pariatur veniam irure voluptate. Cillum adipisicing deserunt nisi quis anim fugiat ipsum incididunt veniam laboris et eiusmod minim. Tempor esse ex reprehenderit occaecat velit non do magna consequat consequat exercitation tempor elit. Ea pariatur irure laborum ipsum reprehenderit sunt sit minim excepteur pariatur magna deserunt aliqua velit non. Culpa irure dolore commodo quis do. Nulla ea consectetur ullamco deserunt laborum consectetur. Amet sunt in esse cupidatat excepteur veniam do. Est quis commodo consequat reprehenderit reprehenderit. Magna laboris dolor dolor laborum. Culpa officia dolor labore aute commodo ex nisi incididunt officia in aute incididunt voluptate. Do nisi dolore ea veniam adipisicing voluptate reprehenderit ea proident aliquip. Labore enim in minim. Aliquip cillum do consequat labore Lorem exercitation. Laborum anim aute in nisi aliqua nulla commodo nostrud laborum. Lorem cillum ut cillum laborum occaecat consequat elit duis. Dolore dolor deserunt nisi dolore laborum sit ea deserunt ipsum dolor ut sit minim. Reprehenderit esse consectetur dolore esse nostrud. Commodo laborum tempor magna cillum Lorem ad qui nisi consequat sit in amet veniam. Ex pariatur eiusmod labore aute id dolor et sunt cupidatat id et non proident enim sint. Duis duis id in et in incididunt Lorem veniam aliquip. Culpa duis deserunt eiusmod laborum labore ea non sit eu ipsum eu.`,
            });
        }
        this.setData({
            items,
        });
    },
    onChange(current) {
        current = current.detail;
        this.setData({
            current,
            scrollTop: Math.random(),
        });
    },
});
