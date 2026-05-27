;; Config updated 2026-05-27T11:17:54Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u3)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
