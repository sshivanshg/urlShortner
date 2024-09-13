import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Button} from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { AvatarFallback } from './ui/avatar';




const Header = () => {
    const navigate =  useNavigate()
    const user = true;

  return (
  <nav className='py-4 flex justify-between items-center'>
     <Link to="/">
        <img src="/logo.png" className="h-16" alt="Trimmer logo"/>
    </Link>

    <div>
        {!user ?(
        <Button onClick={() => navigate("/auth")}>Login</Button>

            ) : (
        <DropdownMenu>
        <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
            )
        }
    </div>
</nav>
  )
}

export default Header;