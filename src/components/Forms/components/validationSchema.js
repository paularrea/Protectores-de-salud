import * as Yup from "yup";

const schema = Yup.object().shape({
	patientFirstName: Yup.string().required('Porfavor introduzca el nombre de el/la paciente'),
	patientLastName: Yup.string().required('Porfavor introduzca el apellido de el/la paciente'),
  patientPhone: Yup.string().required('Porfavor introduzca el teléfono de el/la paciente'),
  patientCountry: Yup.string().required('Porfavor introduzca el país de el/la paciente'),
  patientCity: Yup.string().required('Porfavor introduzca la ciudad de el/la paciente'),
  patientAddress: Yup.string().required('Porfavor introduzca la dirección del paciente'),
  // question_uuid: Yup.string().required('Porfavor introduzca este campo')

});

export default schema;
