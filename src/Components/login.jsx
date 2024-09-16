import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { BeatLoader } from 'react-spinners';
import Error from '../components/error';
import * as Yup from 'yup';


const Login = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid Email")
          .required("Email is Required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is Required"),
      });

      await schema.validate(formData, { abortEarly: false });
    //   await fnLogin(); // Assuming fnLogin is defined elsewhere
    } catch (e) {
      const newErrors = {};
      e?.inner?.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    } finally {
    //   setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>to your account if you already have one</CardDescription>
      </CardHeader>
      <form onSubmit={handleLogin}>
        <CardContent className="space-y-2">
          <div className='space-y-1'>
            <Input 
              name="email" 
              type="email" 
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <Error message={errors.email} />}
          </div>
          <div className='space-y-1'>
            <Input 
              name="password" 
              type="password" 
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <Error message={errors.password} />}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">
            {/* {isLoading ? <BeatLoader size={10} color='#36d7b7' /> : "Login"} */}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Login;




