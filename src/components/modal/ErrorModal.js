import React, {Component} from 'react';
import Swal from 'sweetalert2'
export function loadError() {
    Swal.fire({
        // title: '<p style="font-size: 16px;">Error!</p>',
        text: `Error: ${error}`,
        showCloseButton: true,
        color: "#e24c4b",
        position: "top-end",
        showConfirmButton: false,
        width: 300

    })
}