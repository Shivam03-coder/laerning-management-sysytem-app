import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesome, Fontisto } from "@expo/vector-icons";

const initialValues: ILogin = {
  email: "",
  password: "",
};

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={() => {}}
    >
      {(props) => (
        <View className="mx-4 my-6 flex gap-3">
          <View className="flex gap-3">
            <Text className="text-xl font-bold flex justify-center items-center">
              Email{" "}
              <Fontisto
                name="email"
                className="font-bold"
                size={18}
                color="black"
              />
            </Text>
            <TextInput
              className="h-14  pl-4 rounded-lg text-xl bg-paleblue text-primary"
              placeholder="Email"
              onChangeText={props.handleChange("email")}
              value={props.values.email}
              keyboardType="email-address"
            />
            {props.errors.email && <Text>{props.errors.email}</Text>}
          </View>

          <View className="flex gap-3">
            <Text className="text-xl font-bold flex justify-center items-center">
              Password{" "}
              <FontAwesome className="font-bold" size={18} color="black" />
            </Text>
            <TextInput
              className="h-14  pl-4 rounded-lg text-xl bg-paleblue text-primary"
              placeholder="********"
              onChangeText={props.handleChange("password")}
              value={props.values.password}
              keyboardType="default"
            />
            {props.errors.password && <Text>{props.errors.password}</Text>}
          </View>

          <TouchableOpacity>LOGIN</TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
