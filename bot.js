const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const botSay = (data) => {
  return [
    "Perkenalkan nama saya drabot. Siapa nama kamu?",
    `Halo ${data?.nama}, Berapa usia kamu?`,
    `Ohhh ${data?.usia}, Hobi kamu apa?`,
    `Sama dong aku juga hobi ${data?.hobi}, Btw punya pacar gak?`,
    `ohhh ${data?.pacar}, siapa namanya?`,
    `Waww ${data?.namapacar}, ya. Nama yang bagus. Asal mana?`,
    `Wahh ${data?.asal}, kita sama. Sekolah mana?`,
    `Owhh ${data?.sekolah}, yaa, sama aku juga. Btw kelas berapa?`,
    `Wihh ${data?.kelas}, kita sama yaa. Makanan kesukaan apa?`,
    `Yee ${data?.makanan}, sama, ya udah kalau gitu. udahan yah?`,
  ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
  init++
  if (init === 1) {
    botDelay({ nama: jawaban.value })
  } else if (init === 2) {
    botDelay({ usia: jawaban.value })
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value })
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value })
  } else if (init === 5) {
    botDelay({ namapacar: jawaban.value})
  } else if (init === 6) {
    botDelay({ asal: jawaban.value})
  } else if (init === 7) {
    botDelay({ sekolah: jawaban.value})
  } else if (init === 8) {
    botDelay({ kelas: jawaban.value})
  } else if (init === 9) {
    botDelay({ makanan: jawaban.value})
  } else if (init === 10) {
    finishing()
  } else {
    botEnd()
  }
}

function botDelay(jawabanUser) {
  console.log({ usersData: usersData })
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
  }, [1250])
  usersData.push(jawaban.value)
  jawaban.value = ""
}

function finishing() {
  pertanyaan.innerHTML = `Thank u ya ${usersData[0]} udah main ke drabot 😉, lain kali kita main ${usersData[2]} bareng ya!`
  jawaban.value = "Siap thanks juga!"
}

function botEnd() {
  window.location.reload()
}
