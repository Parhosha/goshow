import * as Yup from "yup"

const checkSchema = Yup.object().shape({
    companyName: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    registeredEmailAddress: Yup.string().required("Required"),
})

export default checkSchema
