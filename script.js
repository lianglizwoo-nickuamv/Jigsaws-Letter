// ===== Referencias =====
const btnStart = document.getElementById('btn-start');
const audio = document.getElementById('theme-audio');
const staticAudio = document.getElementById('static-audio');
const turnoffAudio = document.getElementById('turnoff-audio');
const staticOverlay = document.getElementById('static-overlay');

const sceneStart = document.getElementById('scene-start');
const sceneGreeting = document.getElementById('scene-greeting');
const sceneChoices = document.getElementById('scene-choices');
const sceneFirstResponse = document.getElementById('scene-first-response');
const sceneUniversalChoices = document.getElementById('scene-universal-choices');
const sceneResponse = document.getElementById('scene-response');
const sceneCage = document.getElementById('scene-cage');
const sceneFinal = document.getElementById('scene-final');

const textGreeting = document.getElementById('text-greeting');
const textFirstResponse = document.getElementById('text-first-response');
const textUniversal = document.getElementById('text-universal');
const textResponse = document.getElementById('text-response');
const textCage = document.getElementById('text-cage');
const textFinal = document.getElementById('text-final');

// ===== Textos de Jigsaw =====
const DIALOGUES = {
  greeting: "Hola Anael.",
  
  // Primera selección de diálogo
  firstChoice_A: "Sos fan mio?",
  firstChoice_B: "Creo que no tuve que haberme dormido tan tarde de nuevo, comienzo a ver cosas..",
  
  // Respuestas personalizadas a la primera selección
  responseFirstA: "Así es Anael, me llamo Jigsaw y soy uno de tus fans, siempre me haces reír con tus locuras y a veces digo... esta muchacha tiene más tornillos sueltos que yo, ja ja ja.",
  responseFirstB: "Esta vez no Anael, desgraciadamente la somnolencia aun te persigue, pero sigues siendo más rápida que ella.",
  
  // Diálogos universales (antes de segunda elección)
  universal_1: "Te diré porque estás aquí, un pajarito me contó que te encantan las películas de terror...",
  universal_2: "Y en algunas de estas los personajes mueren de maneras \"cuestionables\"...",
  universal_3: "Te causan gracia... y hace que te dejes de tomar la película enserio, entonces me pregunto...",
  universal_4: "¿Realmente Anael valora la vida?",
  
  // Segunda selección de diálogo
  secondChoice_A: "Voy a despertar dentro de poco... verdad?",
  secondChoice_B: "Pues si es que se mueren de unas formas tan balurdes...",
  
  // Diálogos después de segunda elección (antes de jaula)
  response_after: "Sabía que dirías algo como eso., claro, tal vez los campistas de viernes trece no te importen un comino...",
  special_1: "¿pero qué me dices de alguien especial?",
  special_2: "... Mira bien la pantalla.",
  
  // Diálogos finales (6 partes separadas)
  final_1: "Quiero jugar un juego...",
  final_2: "¿Ahora sí te interesa la vida?",
  final_3: "Te diré las reglas, este Domingo 5 de Julio, te espero en el Parque Japonés, a las 1 de la tarde.",
  final_4: "Tu objetivo es encontrar el número de personajes que murieron de manera \"estúpida\" o \"innecesaria\", repartidos entre mis dos películas.",
  final_5: "Tendrás hasta las 5 de la tarde para descifrar este número y rescatar a tu adorado Suguru Geto.",
  final_6: "Ganar o perder... haz tu elección."
};

// ===== Utilidad: efecto de cambio de canal =====
function glitchTransition(callback) {
  staticOverlay.classList.add('flicker');
  setTimeout(() => {
    staticOverlay.classList.remove('flicker');
    callback();
  }, 350);
}

function showScene(scene) {
  document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
  scene.classList.add('active');
}

// ===== Efecto máquina de escribir =====
function typeText(element, text, speed = 30, onComplete = null) {
  element.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (onComplete) onComplete();
    }
  }, speed);
}

// ===== Mostrar botones de primera selección =====
function showFirstChoiceButtons() {
  const firstChoicesDiv = document.getElementById('first-choices');
  firstChoicesDiv.classList.add('visible');
}

// ===== Mostrar diálogos universales + segunda selección =====
function showUniversalDialogues() {
  const secondChoicesDiv = document.getElementById('second-choices');
  secondChoicesDiv.classList.remove('visible');
  textUniversal.textContent = "";

  // 1er diálogo universal
  typeText(textUniversal, DIALOGUES.universal_1, 25, () => {
    setTimeout(() => {
      // 2do diálogo universal
      typeText(textUniversal, DIALOGUES.universal_2, 25, () => {
        setTimeout(() => {
          // 3er diálogo universal
          typeText(textUniversal, DIALOGUES.universal_3, 25, () => {
            setTimeout(() => {
              // 4to diálogo universal
              typeText(textUniversal, DIALOGUES.universal_4, 25, () => {
                setTimeout(() => {
                  // Mostrar botones de segunda selección
                  textUniversal.textContent = "";
                  secondChoicesDiv.classList.add('visible');
                }, 800);
              });
            }, 1000);
          });
        }, 1000);
      });
    }, 1000);
  });
}

// ===== Paso 1: iniciar grabación con efecto de TV estática =====
btnStart.addEventListener('click', () => {
  // Bloquear el botón para evitar múltiples clics
  btnStart.disabled = true;
  
  // Reproducir efecto de TV estática (5 segundos)
  staticAudio.volume = 0.7;
  staticAudio.play().catch(err => console.log("Efecto estático bloqueado:", err));

  // Esperar a que termine el efecto estático (5000ms)
  setTimeout(() => {
    glitchTransition(() => {
      showScene(sceneGreeting);
      // Reproducir tema de fondo
      audio.volume = 0.6;
      audio.play().catch(err => console.log("Tema bloqueado:", err));
      
      typeText(textGreeting, DIALOGUES.greeting, 40, () => {
        setTimeout(() => {
          glitchTransition(() => {
            showScene(sceneChoices);
            showFirstChoiceButtons();
          });
        }, 1200);
      });
    });
  }, 5000);
});

// ===== Mostrar diálogos antes de la jaula =====
function showResponseDialogues() {
  glitchTransition(() => {
    showScene(sceneResponse);
    // 1er diálogo de respuesta
    typeText(textResponse, DIALOGUES.response_after, 25, () => {
      setTimeout(() => {
        // 2do diálogo (especial 1)
        typeText(textResponse, DIALOGUES.special_1, 25, () => {
          setTimeout(() => {
            // 3er diálogo (especial 2)
            typeText(textResponse, DIALOGUES.special_2, 25, () => {
              setTimeout(goToCage, 1800);
            });
          }, 1200);
        });
      }, 1200);
    });
  });
}

// ===== Paso 2: primera selección de diálogo =====
document.querySelectorAll('.first-choice-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const choice = btn.dataset.choice;
    const responseText = choice === 'A' ? DIALOGUES.responseFirstA : DIALOGUES.responseFirstB;

    glitchTransition(() => {
      showScene(sceneFirstResponse);
      typeText(textFirstResponse, responseText, 25, () => {
        setTimeout(() => {
          glitchTransition(() => {
            showScene(sceneUniversalChoices);
            showUniversalDialogues();
          });
        }, 1500);
      });
    });
  });
});

// ===== Paso 3: segunda selección de diálogo =====
document.querySelectorAll('.second-choice-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    showResponseDialogues();
  });
});

// ===== Paso 4: revelar la jaula =====
function goToCage() {
  glitchTransition(() => {
    showScene(sceneCage);
    // La jaula aparece sin diálogo, solo la imagen
    setTimeout(goToFinal, 2500);
  });
}

// ===== Paso 5: diálogos finales con las reglas =====
function goToFinal() {
  glitchTransition(() => {
    showScene(sceneFinal);
    
    // 1er diálogo final
    typeText(textFinal, DIALOGUES.final_1, 22, () => {
      setTimeout(() => {
        // 2do diálogo final
        typeText(textFinal, DIALOGUES.final_2, 22, () => {
          setTimeout(() => {
            // 3er diálogo final
            typeText(textFinal, DIALOGUES.final_3, 22, () => {
              setTimeout(() => {
                // 4to diálogo final
                typeText(textFinal, DIALOGUES.final_4, 22, () => {
                  setTimeout(() => {
                    // 5to diálogo final
                    typeText(textFinal, DIALOGUES.final_5, 22, () => {
                      setTimeout(() => {
                        // 6to diálogo final
                        typeText(textFinal, DIALOGUES.final_6, 22, () => {
                          setTimeout(turnOffTV, 2500);
                        });
                      }, 1500);
                    });
                  }, 1500);
                });
              }, 1500);
            });
          }, 1500);
        });
      }, 1500);
    });
  });
}

// ===== Apagar la TV con efecto de 6 segundos =====
function turnOffTV() {
  // Segundo 0-2: pausar la música de fondo
  audio.pause();
  
  // Segundo 2-5: fade out de Jigsaw e imagen (opacity)
  setTimeout(() => {
    const jigsaw = sceneFinal.querySelector('.jigsaw-img');
    const dialogue = sceneFinal.querySelector('.dialogue');
    if (jigsaw) jigsaw.style.opacity = '0';
    if (dialogue) dialogue.style.opacity = '0';
  }, 2000);
  
  // Segundo 5-6: reproducir efecto de apagado
  setTimeout(() => {
    turnoffAudio.volume = 0.8;
    turnoffAudio.play().catch(err => console.log("Efecto turnoff bloqueado:", err));
    
    // Oscurecer la pantalla
    const tvScreen = document.getElementById('tv-screen');
    tvScreen.classList.add('powered-off');
  }, 5000);
}