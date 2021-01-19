const getLoginFormSchema = () => ({
    companyName: {
        label: "Company Name:",
        type: "text",
        name: "companyName",
    },
    firstName: {
        label: "First Name:",
        type: "text",
        name: "firstName",
    },
    lastName: {
        label: "Last Name:",
        type: "textarea",
        name: "lastName",
    },
    registeredEmailAddress: {
        label: "Registered email address: ",
        type: "email",
        name: "registeredEmailAddress",
    },
})
export default getLoginFormSchema
