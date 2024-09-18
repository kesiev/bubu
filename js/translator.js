let Translator=function(){

    const
    FILTERS={
        bubu:[
            // --- English
            {
                type:"replace",
                from:/cy/gi,
                to:"sai"
            },{
                type:"replace",
                from:/punk/gi,
                to:"panc"
            },{
                type:"replace",
                from:/shake/gi,
                to:"sciech"
            },{
                type:"replace",
                from:/spear/gi,
                to:"spir"
            },{
                type:"replace",
                from:/white/gi,
                to:"uait"
            },{
                type:"replace",
                from:/something/gi,
                to:"samfin"
            },{
                type:"replace",
                from:/new/gi,
                to:"niu"
            },{
                type:"replace",
                from:/hea/gi,
                to:"ha"
            },{
                type:"replace",
                from:/design/gi,
                to:"desain"
            },{
                type:"replace",
                from:/writer/gi,
                to:"vraiter"
            },{
                type:"replace",
                from:/magazine/gi,
                to:"megasin"
            },{
                type:"replace",
                from:/play/gi,
                to:"pei"
            },{
                type:"replace",
                from:/down/gi,
                to:"daun"
            },

            // --- CRI -> CHI -> (cretino -> chetino)
            {
                type:"replace",
                from:/([cg])r([ei])/gi,
                to:"$1h$2"
            },

            // --- RM -> MM (marmellata -> mammellata)
            {
                type:"replace",
                from:/r([lvmt])/gi,
                to:"$1$1"
            },

            // --- R ->  (radio -> adio)
            {
                type:"replace",
                from:/(^|[ ?!,.;’'])r([^a ?!,.;’'])/gi,
                to:"$1$2"
            },
            
            // --- GRA -> BA (grande -> gande)
            {
                type:"replace",
                from:/(^|[^r])r([aeiouàééìòù])/gi,
                to:"$1$2"
            },

            // --- CCIA -> SSE (leccia -> lessia)
            {
                type:"replace",
                from:/cc[ei]([aeiou])/gi,
                to:"ss$1"
            },

            // --- CCE -> SSE (gocce -> gosse)
            {
                type:"replace",
                from:/(^|[^e])cc([ei])/gi,
                to:"$1ss$2"
            },

            // ACIA -> ASA (audacia -> audasa)
            {
                type:"replace",
                from:/(^|[^u])ci([aeou])/gi,
                to:"$1###$2"
            },

            // CE -> SE (audace -> audase)
            {
                type:"replace",
                from:/(^|[^c])c([ei])/gi,
                to:"$1s$2"
            },

            // --- CTO -> TTO (autoctono -> autottono)
            {
                type:"replace",
                from:/c([t])/gi,
                to:"$1$1"
            },

            // --- IZI -> ISSI (inizio -> INISSIO) 
            {
                type:"replace",
                from:/([aeiou])z([^za])/gi,
                to:"$1ss$2"
            },

            // --- AZZ -> ASS (mazza -> massa)
            {
                type:"replace",
                from:/([^aeioulnp][e])zz([^u])/gi,
                to:"$1sz$2"
            },{
                type:"replace",
                from:/([^i])zz([^u])/gi,
                to:"$1ss$2"
            },{
                type:"replace",
                from:/(^|[^aeiours])z([^a])/gi,
                to:"$1sz$2"
            },

            // --- NZA -> NSA -> (stanza -> stansa)
            {
                type:"replace",
                from:/(^|[^aeiours])z([aeiou])/gi,
                to:"$1###$2"
            },{
                type:"replace",
                from:/([r])z([aeiou])/gi,
                to:"$1###$2"
            },
            
            // --- Fix "ZZ" -> ZSZ -> SZ
            {
                type:"replace",
                from:/zsz/gi,
                to:"sz"
            },

            // --- G/J -> Z
            {
                type:"replace",
                from:/[jg]+e/gi,
                to:"sze"
            },

            // --- N L -> LL (con le -> colle)
            {
                type:"replace",
                from:/n l/gi,
                to:"ll"
            },

            // --- R -> -> per il -> peil
            {
                type:"replace",
                from:/r ([a-zA-Z])/gi,
                to:"$1"
            },

            // --- GGIò -> ZZO (poggiò -> pozzò)
            {
                type:"replace",
                from:/gg([aeio])([òaeiou])/gi,
                to:"zz$2"
            },{
                type:"replace",
                from:/([a])gg([i])/gi,
                to:"$1zz$2"
            },{
                type:"replace",
                from:/gm([aeiou])/gi,
                to:"mm$1"
            },

            // --- GIA -> ZJ (giacca -> zjacca)
            {
                type:"replace",
                from:/(^|[^aeiou])gi([aoue])/gi,
                to:"$1zji$2"
            },

            // --- SN -> ZJN (snodo -> zjnodo)
            {
                type:"replace",
                from:/sn/gi, // QUA
                to:"zjn"
            },{
                type:"replace",
                from:/([^aeiu])gi([aeiou])($|[ ?!,.;’'])/gi,
                to:"$1zi$2$3"
            },{
                type:"replace",
                from:/gi([àaeiou])/gi,
                to:"z$1"
            },
            // IANGO -> IANZO (piango -> pianzo)
            {
                type:"replace",
                from:/([aeiou]{2,})ng([eio])/gi,
                to:"$1nz$2"
            },

            // --- RT -> TT (orto -> otto)
            {
                type:"replace",
                from:/r([dpbftsncg])/gi,
                to:"$1$1"
            },{
                type:"replace",
                from:/(^|[^u])rr([aeiou])/gi,
                to:"$1$2"
            },
            
            // --- AGE -> AZE
            {
                type:"replace",
                from:/[gj]i([^aeou])/gi,
                to:"zi$1"
            },

            // OSI -> OZI
            {
                type:"replace",
                from:/([aeo])s([aou])/gi,
                to:"$1z$2"
            },{
                type:"replace",
                from:/([aeou])s([^aàeèéiìoòuùzctpmf])/gi,
                to:"$1$2$2"
            },

            // STI -> SI (capitalista -> capitalissa)
            {
                type:"replace",
                from:/is([t])/gi,
                to:"iss"
            },

            // --- PLA -> PA (platano -> patano)
            {
                type:"replace",
                from:/(^|[^el])([pbuoieafr])l([aeiou])/gi,
                to:"$1$2$3"
            },

            // --- CLA -> CA (classica -> cassica)
            {
                type:"replace",
                from:/cl([uao])/gi,
                to:"c$1"
            },

            // --- CLE -> CHE (pericle -> peiche)
            {
                type:"replace",
                from:/cl([ei])/gi,
                to:"ch$1"
            },

            // --- NLA -> LLA (finlandese -> fillandese)
            {
                type:"replace",
                from:/nl([aeiou])/gi,
                to:"ll$1"
            },

            // --- GLA -> GHA (glicemia -> ghicemia)
            {
                type:"replace",
                from:/(^|[^aeou])gl([ie])([aeiou])/gi,
                to:"$1$2$3"
            },{
                type:"replace",
                from:/(^|[^aeou])gl([i])([^a-z]|$)/gi,
                to:"$1$2$3"
            },{
                type:"replace",
                from:/(^|[^aeou])gl([ie])/gi,
                to:"$1gh$2"
            },{
                type:"replace",
                from:/(^|[^a])gl([uao])/gi,
                to:"$1g$2"
            },{
                type:"replace",
                from:/gli/gi,
                to:"ii"
            },

            // --- ULLO -> UUO (sullo ->suuo)
            {
                type:"replace",
                from:/(^|[^gc])([pbuo])ll([aeiou])/gi,
                to:"$1$2$2$3"
            },
           
            // --- LM -> MM
            {
                type:"replace",
                from:/l([^aeiouz# ?!,.;’'])/gi,
                to:"$1$1"
            },{
                type:"replace",
                from:/l ([^aeiou0123456789])/gi,
                to:"$1$1"
            },

            // --- L ->  (lira -> ira)
            {
                type:"replace",
                from:/(^|[ ?!,.;’'])l([^a ?!,.;’'])/gi,
                to:"$1$2"
            },

            // --- SV -> ZV
            {
                type:"replace",
                from:/sv/gi,
                to:"zv"
            },

            // --- CN -> NN (tecnologia -> tennologia)
            {
                type:"replace",
                from:/cn([aeiou])/gi,
                to:"nn$1"
            },

            // --- C'E -> SE
            {
                type:"replace",
                from:/c['’]/gi,
                to:"s"
            },

            // --- XA -> SSA (alexa -> alessa)
            {
                type:"replace",
                from:/x([aeiou])/gi,
                to:"ss$1"
            },

            // --- Fix "zzj"
            {
                type:"replace",
                from:/([aeiou])z+j/gi,
                to:"$1gg"
            },

            // --- Inglese
            {
                type:"replace",
                from:/y/gi,
                to:"i"
            },{
                type:"replace",
                from:/wae/gi,
                to:"ue"
            },{
                type:"replace",
                from:/ck([aeiou])/gi,
                to:"ch$1"
            },{
                type:"replace",
                from:/w/gi,
                to:"u"
            },{
                type:"replace",
                from:/ork/gi,
                to:"oc"
            },
            // --- Add forced S
            {
                type:"replace",
                from:/####+/gi,
                to:"ss"
            },{
                type:"replace",
                from:/###/gi,
                to:"s"
            }
        ]
    };

    function convert(sentence,type,debug,debugskip) {
        FILTERS[type].forEach((filter,id)=>{
            if ((debugskip== undefined) || (id != debugskip)) {
                let
                    prevSentence = sentence;
                switch (filter.type) {
                    case "replace":{
                        for (let i=0;i<10;i++)
                            sentence = sentence.replace(filter.from,filter.to)
                        break;
                    }
                }
                if ((debug || filter._debug) && (prevSentence != sentence)) {
                    console.warn(prevSentence);
                    console.log(filter);
                    console.warn(">>>>",sentence);
                }
            }
        });
        return sentence;
    }

    this.FILTERS = FILTERS;

    this.translate = function(sentence,type) {
        return convert(sentence,type);
    }

    this.testTranslate = function(sentence,type,debug,debugskip) {
        return convert(sentence,type,debug,debugskip);
    }

};
