import React from 'react'
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


const Signup = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Signup</CardTitle>
        <CardDescription>
          Create a new account if you haven&rsquo;t already
        </CardDescription>

      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Input
            name="name"
            type="text"
            placeholder="Enter Name"
            // onChange={handleInputChange}
          />
          {/* on change =  {hadleIn} */}
        </div>
        <div className="space-y-1">
          <Input
            name="email"
            type="email"
            placeholder="Enter Email"
            // onChange={handleInputChange}
          />
        </div>
        <div className="space-y-1">
          <Input
            name="password"
            type="password"
            placeholder="Enter Password"
            // onChange={handleInputChange}
          />
        </div>
        <div className="space-y-1">
          <input
            name="profile_pic"
            type="file"
            accept="image/*"
            // onChange={handleInputChange}
        
          />
        </div>

      </CardContent>
      <CardFooter>
        <Button>
        Create Account
          {/* {loading ? ( */}
            {/* <BeatLoader size={10} color="#36d7b7" /> */}
          {/* ) : (
            "Create Account"
          )} */}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Signup;