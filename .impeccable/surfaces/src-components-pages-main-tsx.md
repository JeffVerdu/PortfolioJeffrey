---
version: 1
slug: "src-components-pages-main-tsx"
primary_target: "src/components/pages/Main.tsx"
related_targets: ["src/index.css","src/App.tsx"]
---

# Portfolio redesign

Scope: `/`, primary target `src/components/pages/Main.tsx`. Mode: Experience with a recruiter-oriented reading path. Complete replacement of the old sidebar, dark theme and carousel. User delegated decisions: “No hace falta preservar nada, puedes implementar los cambios que consideres.”

Approved by explicit decision-page selection (optionId assigned, buildPath comp; no preference flip): `.impeccable/mocks/capas.png`. Three compositions were shown inline and on the decision page. The first combines an immediate professional introduction with a functional explanation of technical areas; the alternatives either postpone production experience or repeat the profile without useful interaction. The mint panel's flat ground is semantic CSS; image-generation surface noise is not an intended texture. No raster artwork is required in the hero. Project screenshots below it remain actual evidence from the repository.

## Direction contract

THESIS: Full Stack explained through real work. Recruiters read the profile immediately and explore the layers of an application through accessible tabs.

OWN-WORLD: Cool white ground, petrol ink and an expansive mint panel; humanist sans, generous type, restrained corners, open rows and precise dividers. Controls use the same flat visual language.

STORY: Identity and technical focus → current production work with official role clarified → two public projects → skills and training → direct contact and CV.

FIRST VIEWPORT: Horizontal navigation; left headline “Del backend a la interfaz.”, personal introduction, experience and CV actions; right mint “Un perfil, distintas capas.” panel with Interfaz/Backend/Datos tabs, evidence and connected semantic rows. The dark experience section begins at the fold. Signature interaction: selecting a layer changes its evidence and rows with a short vertical settling transition; reduced motion removes it.

FORM: Software architecture review, grounded candidate 7, seed `229c3c20`. Comp-led, `.impeccable/mocks/capas.png`. Daytime work-laptop use motivates the light reading surface. Six declined challengers contribute traceability, rhythmic density, clear selection, keyboard operation and a single interaction focus, without their unrelated visual metaphors.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Constraints: Spanish; factual 2026 CV; all existing professional information retained in the new structure; no invented employer screenshots, metrics, endorsements or seniority. Public project images show their existing interfaces, not redesigned claims. No deployment in this task.
