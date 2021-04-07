﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]  // this makes the fields required making sure the user types something in.
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
