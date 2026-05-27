;; Config updated 2026-05-27T16:32:51Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u23)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
