import { Role } from "@/types";

const fa: Role = {
    id: "1",
    title: "Founder's Associate",
    description: `
    Integer imperdiet velit neque, in sagittis arcu condimentum eu. Nullam non risus tellus. Proin vulputate malesuada elit, id mattis odio tristique eget. Morbi venenatis, elit eu venenatis efficitur, ligula mi condimentum arcu, vitae aliquam mauris mauris vitae ex. Suspendisse sollicitudin nunc in porttitor porta. Sed turpis justo, tincidunt a ligula quis, vehicula semper nisl. Etiam interdum, ex id euismod tincidunt, lorem lacus porta nisl, vitae vulputate libero erat non leo. Aliquam tincidunt fringilla nisi non placerat.

Vivamus aliquam tellus consectetur sem elementum luctus. Vivamus a risus dui. Quisque faucibus auctor augue in tristique. Aenean fermentum nisi at pharetra placerat. Pellentesque at leo eu erat luctus tristique. Aliquam non accumsan nisi, nec congue metus. Quisque vel ex orci. Nam facilisis ex enim. Vestibulum tempus massa eget euismod imperdiet. Sed sit amet risus rutrum, commodo odio ac, convallis metus. Ut congue tempor est in maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Phasellus interdum ex in nibh scelerisque consequat. Quisque pretium vestibulum ipsum, eu placerat libero feugiat quis. Vivamus venenatis, nunc et tristique iaculis, mi eros aliquam nunc, sed pulvinar odio turpis vitae quam. Donec diam velit, pharetra non volutpat quis, porttitor vel mi. Sed lacinia molestie libero, ut posuere urna pretium ut. In tincidunt justo vel nunc tristique interdum a vel lectus. In sem felis, suscipit sit amet lacus porttitor, sollicitudin placerat ipsum. Aliquam erat volutpat. Nunc maximus rhoncus feugiat.

Fusce finibus venenatis ex, nec condimentum quam fringilla blandit. Nunc rhoncus hendrerit massa a tempus. Etiam ut erat sodales, fringilla quam at, lobortis lacus. Praesent sed porttitor massa. Vestibulum sit amet consectetur augue, ut tristique dui. Integer id semper odio, at mollis leo. Aenean ac accumsan arcu, non condimentum lectus. Pellentesque lacinia lectus non leo rhoncus, at lacinia libero feugiat. Phasellus quis porta felis, ut dignissim lectus. Morbi at ligula at odio venenatis hendrerit ut eu ante. Ut ultricies, sem sed faucibus condimentum, libero risus suscipit lectus, quis interdum nibh orci rhoncus orci. Aenean vulputate est et elit ornare aliquet. In at orci eu neque commodo luctus non sed enim.
`,
    stages: [
        {
            id: "1",
            title: "Intro Interview",
            description:
                "Integer imperdiet velit neque, in sagittis arcu condimentum eu.",
        },
        {
            id: "2",
            title: "Case Study",
            description:
                "Vivamus aliquam tellus consectetur sem elementum luctus. Vivamus a risus dui.",
        },
        {
            id: "3",
            title: "Case Study Review",
            description: "Phasellus interdum ex in nibh scelerisque consequat.",
        },
        {
            id: "4",
            title: "Founder Interview",
            description:
                "Fusce finibus venenatis ex, nec condimentum quam fringilla blandit.",
        },
    ],
};

const eng: Role = {
    id: "2",
    title: "Founding Engineer",
    description: "",
    stages: [
        {
            id: "1",
            title: "Intro Interview",
            description:
                "Integer imperdiet velit neque, in sagittis arcu condimentum eu.",
        },
        {
            id: "2",
            title: "Coding Challenge",
            description:
                "Vivamus aliquam tellus consectetur sem elementum luctus. Vivamus a risus dui.",
        },
        {
            id: "3",
            title: "Coding Challenge Review",
            description: "Phasellus interdum ex in nibh scelerisque consequat.",
        },
        {
            id: "4",
            title: "Engeering Interview",
            description:
                "Fusce finibus venenatis ex, nec condimentum quam fringilla blandit.",
        },
        {
            id: "5",
            title: "Founder Interview",
            description:
                "Integer imperdiet velit neque, in sagittis arcu condimentum eu.",
        },
    ],
};

const growth: Role = {
    id: "3",
    title: "Growth Manager",
    description: "",
    stages: [
        {
            id: "1",
            title: "Interview 1",
            description:
                "Vivamus aliquam tellus consectetur sem elementum luctus. Vivamus a risus dui.",
        },
        {
            id: "2",
            title: "Interview 2",
            description: "Phasellus interdum ex in nibh scelerisque consequat.",
        },
        {
            id: "3",
            title: "Interview 3",
            description:
                "Fusce finibus venenatis ex, nec condimentum quam fringilla blandit.",
        },
    ],
};

export const dummyRoles = [fa, eng, growth];
