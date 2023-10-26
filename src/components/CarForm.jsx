import { Field, Form, Formik } from 'formik';
import * as yup from 'yup'
import { IconCar, IconCalendarEvent, IconMapPinFilled } from "@tabler/icons-react";


const CarForm = () => {
    const checkoutSchema = yup.object().shape({
        carType: yup.string().required("required"),
        pickUp: yup.string().required("required"),
        dropOf: yup.string().required("required"),
        pickDate: yup.string().required("required"),
        dropDate: yup.string().required("required")
    });
    const initialValues = {
        carType: "",
        pickUp: "",
        dropOf: "",
        pickDate: "",
        dropDate: "",
    };

    const handleFormSubmit = (values) => {
        console.log(values);
    };
    function errorMessage() {
        return <p>All fields required!</p>;
    }
    return (
        <div className='container'>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({
                    errors,
                    touched,
                    handleSubmit,
                }) => (
                    <Form onSubmit={handleSubmit} className='formik'>
                        <h1>Book a car</h1>
                        {(errors.carType || errors.pickUp || errors.dropOf || errors.pickDate || errors.dropDate) && errorMessage()}
                        <div className='car-form'>
                            <div className='field-holder'>
                                <h3>
                                    <IconCar style={{ marginRight: '5px' }} />
                                    Select Your Car Type
                                    <span style={{ color: 'red' }}>*</span>
                                </h3>
                                <Field as='select' name="carType" >
                                    <option>Select your car type</option>
                                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                                    <option value="VW Golf 6">VW Golf 6</option>
                                    <option value="Toyota Camry">Toyota Camry</option>
                                    <option value="BMW 320 ModernLine">
                                        BMW 320 ModernLine
                                    </option>
                                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                                    <option value="VW Passat CC">VW Passat CC</option>
                                </Field>
                            </div>
                            <div className='field-holder'>
                                <h3><IconMapPinFilled style={{ marginRight: '5px' }} />  Pick-up
                                    <span style={{ color: 'red' }}>*</span></h3>
                                <Field as='select' name="pickUp" >
                                    <option>Select pick up location</option>
                                    <option>Belgrade</option>
                                    <option>Novi Sad</option>
                                    <option>Nis</option>
                                    <option>Kragujevac</option>
                                    <option>Subotica</option>
                                </Field>
                            </div> <div className='field-holder'>
                                <h3><IconMapPinFilled style={{ marginRight: '5px' }} /> Drop-of
                                    <span style={{ color: 'red' }}>*</span></h3>
                                <Field as='select' name="dropOf" >
                                    <option>Select pick up location</option>
                                    <option>Belgrade</option>
                                    <option>Novi Sad</option>
                                    <option>Nis</option>
                                    <option>Kragujevac</option>
                                    <option>Subotica</option>
                                </Field>                            </div> <div className='field-holder'>
                                <h3> <IconCalendarEvent style={{ marginRight: '5px' }} />  Pick-up
                                    <span style={{ color: 'red' }}>*</span></h3>
                                <Field type='date' name="pickDate" />
                            </div> <div className='field-holder'>
                                <h3> <IconCalendarEvent style={{ marginRight: '5px' }} /> Drop-of
                                    <span style={{ color: 'red' }}>*</span></h3>
                                <Field type='date' name="dropDate" />
                            </div>
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CarForm